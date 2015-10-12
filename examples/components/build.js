var fs = require('fs')
var _ = require('lodash')
var path = require('path')
var glob = require('glob')
var titleize = require('titleize')
var fm = require('json-front-matter')
var rmHtmlExt = require('remove-html-extension')

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
    frontMatter.content = fmParsed.body

    var compiledPage = _.template(template)(frontMatter)
    fs.writeFileSync(newDir, compiledPage)
  })
})

function getTitle(component) {
  var title = rmHtmlExt(component).replace('examples/components/src/', '').replace(/(\/|_|-)/g, ' ')
  return titleize(title)
}
