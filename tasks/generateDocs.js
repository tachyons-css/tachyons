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
var docModules = [
{
  name: 'styles',
  subModules: [{
    name: 'all styles',
    files: [
      'background_size',
      'base',
      'border_colors',
      'border_radius',
      'border_style',
      'border_widths',
      'borders',
      'box_sizing',
      'button-skins',
      'buttons',
      'clears',
      'code',
      'colors',
      'debug',
      'dimension_utilities',
      'display',
      'floats',
      'font_family',
      'font_style',
      'font_weight',
      'forms',
      'grid',
      'heights',
      'images',
      'letter_spacing',
      'line_height',
      'links',
      'lists',
      'max_widths',
      'normalize',
      'overflow',
      'position',
      'queries',
      'skins',
      'spacing',
      'states',
      'styles',
      'svg_fills',
      'svg_strokes',
      'text_align',
      'text_decoration',
      'text_transform',
      'type_scale',
      'utilities',
      'vertical_align',
      'visibility',
      'white_space',
      'widths',
      'word_spacing'
    ],
    resetSelectors: 'b--black bg-near-white'
  }],
  template: 'styles'
},
{
  name: 'borders',
  subModules: [{
    name: 'borders',
    files: [ 'borders' ],
    resetSelectors: 'b--black bg-near-white'
  }, {
    name: 'border colors',
    files: [ 'border_colors' ],
    resetSelectors: 'ba bw1'
  }, {
    name: 'border radius',
    files: [ 'border_radius' ],
    resetSelectors: 'ba b--black'
  }, {
    name: 'border style',
    files: [ 'border_style' ],
    resetSelectors: 'ba b--black bg-near-white'
  }, {
    name: 'border widths',
    files: [ 'border_widths' ],
    resetSelectors: 'ba b--black'
  }],
  template: 'borders'
},
{
  name: 'type',
  subModules: [{
    name: 'type scale',
    files: [ 'type_scale'],
    resetSelectors: 'black b'
  }, {
    name: 'text transform',
    files: [ 'text_transform' ],
    resetSelectors: 'black'
  }, {
    name: 'text align',
    files: [ 'text_align' ],
    resetSelectors: 'black bg-yellow pas'
  }, {
    name: 'text decoration',
    files: [ 'text_decoration' ],
    resetSelectors: 'black'
  }, {
    name: 'leading',
    files: [ 'line_height' ],
    resetSelectors: 'black'
  }, {
    name: 'font weight',
    files: [ 'font_weight' ],
    resetSelectors: 'black f3'
  }, {
    name: 'font style',
    files: [ 'font_style' ],
    resetSelectors: 'black'
  }, {
    name: 'font family',
    files: [ 'font_family' ],
    resetSelectors: 'black'
  }],
  template: 'type'
},
{
  name: 'svg',
  subModules: [{
    name: 'svg fills',
    files: [ 'svg_fills'],
    resetSelectors: 'fill-black'
  },
  {
    name: 'svg strokes',
    files: [ 'svg_strokes'],
    resetSelectors: 'fill-white sw-4'
  }],
  template: 'svg'
},
{
  name: 'dimensions',
  subModules: [{
    name: 'widths',
    files: [ 'widths'],
    resetSelectors: 'bg-black white'
  },
  {
    name: 'max widths',
    files: [ 'max_widths'],
    resetSelectors: 'bg-black white'
  },
  {
    name: 'heights',
    files: [ 'heights'],
    resetSelectors: 'bg-black white'
  }
  ],
  template: 'dimensions'
},
{
  name: 'skins',
  subModules: [{
    name: 'skins',
    files: [ 'skins' ],
    resetSelectors: 'bg-white'
  }],
  template: 'skins'
}];

var masterTemplate = fs.readFileSync(paths.masterTemplate).toString();

function generateDocs(done) {
  _.forEach(docModules, function forEachDocModule(docModule) {
    var docModuleTemplate =
      fs.readFileSync(path.join(paths.templates, docModule.template + '.html'))
        .toString();
    var subModuleData = _.map(docModule.subModules, function toData(subModule) {
      var files = subModule.files;
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

      var examples = _.chain(ast.stylesheet.rules)
        .filter(function isRule(declaration) {
          return declaration.type === 'rule';
        })
        // No need to filter out media queries, because they are one level down
        // in the syntax tree, and we only filter the top level.
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
          var example = _.template(docModuleTemplate, {
            resetSelector: subModule.resetSelectors,
            selector: selector,
            selectorForDisplay: selectorForDisplay,
            declaration: declaration
          });
          return example;
        })
        .value();
      return {
        name: subModule.name,
        examples: examples
      };
    });
    var moduleTemplate = _.template(masterTemplate, {
      moduleName: docModule.name,
      subModules: subModuleData
    });
    // TODO: go async
    fs.writeFileSync(path.join(paths.docs, docModule.name, 'index.html'),
        moduleTemplate);
  });

  return done();
}

module.exports = generateDocs;
