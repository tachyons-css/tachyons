var fs = require('fs');
var path = require('path');

var css = require('css');
var sass = require('node-sass');
var _ = require('lodash');

var paths = {
  sass: path.join(__dirname, '../sass/'),
  templates: path.join(__dirname, '../views/templates/'),
  masterTemplate: path.join(__dirname, '../views/templates/master.html'),
  docs: path.join(__dirname, '../docs/')
};
var scssDependencies = [ 'queries', 'colors' ];
var docModules = [{
  name: 'borders',
  files: [
    'borders',
    'border_colors',
    'border_radius',
    'border_style',
    'border_widths'
  ],
  template: 'borders'
}];

var masterTemplate = fs.readFileSync(paths.masterTemplate).toString();

function generateDocs(done) {
  _.forEach(docModules, function forEachDocModule(docModule) {
    var files = docModule.files;
    // Create a temporary scss file to be compiled into the css for this module.
    var scss = _.map(scssDependencies.concat(files), function createScss(file) {
      return '@import "' + file + '";';
    }).join('\n');
    // TODO: go async
    var cssText = sass.renderSync({
      data: scss,
      includePaths: [ paths.sass ]
    });

    // Read the css ast, and for each selector in each rule, generate an example.
    var ast = css.parse(cssText);

    // TODO: go asyn
    var template =
      fs.readFileSync(path.join(paths.templates, docModule.template + '.html'))
        .toString();
    var examples = _.chain(ast.stylesheet.rules)
      .filter(function isRule(declaration) {
        return declaration.type === 'rule';
      })
      // No need to filter out media queries, because they are one level down in
      // the syntax tree, and we only filter the top level.
      .map(function templatizeRule(rule) {
        var selectors = rule.selectors;
        var selector = _.chain(selectors)
          .map(function clearPeriod(selector) {
            return selector.slice(1);
          })
          .values()
          .join(' ');
        var selectorForDisplay = selectors.join(', ');
        var declaration = _.chain(rule.declarations)
          .map(function declarationToString(declaration) {
            return declaration.property + ': ' + declaration.value;
          })
          .value()
          .join('; ');
        var example = _.template(template, {
          selector: selector,
          selectorForDisplay: selectorForDisplay,
          declaration: declaration
        });
        return example;
      })
      .value();
    var moduleTemplate = _.template(masterTemplate, {
      module_name: docModule.name,
      examples: examples
    });
    // TODO: go async
    fs.writeFileSync(path.join(paths.docs, docModule.name, 'index.html'),
        moduleTemplate);
  });

  return done();
}

generateDocs(function() {});

module.exports = generateDocs;
