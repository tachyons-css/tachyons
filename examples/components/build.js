var fs = require('fs')
var _ = require('lodash')
var path = require('path')
var glob = require('glob')
var titleize = require('titleize')
var fm = require('json-front-matter')
var rmHtmlExt = require('remove-html-extension')
var getClasses = require('get-classes-from-html')
var postcss = require('postcss')
var select = require('postcss-select')
var atImport = require('postcss-import')
var conditionals = require('postcss-conditionals')
var removeComments = require('postcss-discard-comments')
var cssVariables = require('postcss-css-variables')
var customMedia = require('postcss-custom-media')
var mqPacker = require('css-mqpacker')

var tachyonsCss = fs.readFileSync('src/tachyons.css', 'utf8')

glob('examples/components/src/**/*.html', {}, function (err, components) {
  if (err) {
    console.error(err)
    return
  }

  var template = fs.readFileSync('examples/components/component-template.html', 'utf8')

  components.forEach(function (component) {
    var newDir = rmHtmlExt(component.replace('/src', '')) + '/index.html'
    var componentHtml = fs.readFileSync(component, 'utf8')

    var fmParsed = fm.parse(componentHtml)
    var frontMatter = fmParsed.attributes || {}
    frontMatter.title = frontMatter.title || getTitle(component)
    frontMatter.classes = getClasses(fmParsed.body).map(function(klass) {
      return '.' + klass
    })
    frontMatter.componentHtml = componentHtml
    frontMatter.content = fmParsed.body
    var compiledPage = _.template(template)(frontMatter)
    frontMatter.componentCss = postcss([
      atImport(), cssVariables(), conditionals(), customMedia(), select(frontMatter.classes), removeComments(), mqPacker()
    ]).process(tachyonsCss).css

    fs.writeFileSync(newDir, compiledPage)
  })
})

function getTitle(component) {
  var title = rmHtmlExt(component).replace('examples/components/src/', '').replace(/(\/|_|-)/g, ' ')
  return titleize(title)
}
