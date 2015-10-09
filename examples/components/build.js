var fs = require('fs')
var _ = require('lodash')
var path = require('path')
var glob = require('glob')
var titleize = require('titleize')
var rmHtmlExt = require('remove-html-extension')

glob('examples/components/src/**/*.html', {}, function (err, components) {
  if (err) {
    console.error(err)
    return
  }

  var template = fs.readFileSync('examples/components/component-template.html', 'utf8')

  components.forEach(function (component) {
    var title = getTitle(component)
    var newDir = rmHtmlExt(component.replace('/src', '')) + '/index.html'
    var componentHtml = fs.readFileSync(component)

    console.log(newDir)
    console.log(title)

    var compiledPage = _.template(template)({ title: title, content: componentHtml })
    fs.writeFileSync(newDir, compiledPage)
  })
})

function getTitle(component) {
  var title = rmHtmlExt(component).replace('examples/components/src/', '').replace(/(\/|_|-)/g, ' ')
  return titleize(title)
}
