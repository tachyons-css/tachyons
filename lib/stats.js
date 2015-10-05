var _ = require('lodash')
var fs = require('fs')
var filesize = require('filesize')
var cssstats = require('cssstats')

var module = require('./package.json')
var moduleCss = fs.readFileSync('./css/tachyons.min.css', 'utf8')
var moduleObj = cssstats(moduleCss)
var moduleSize = filesize(moduleObj.gzipSize)

var siteFooter = fs.readFileSync('./templates/footer.html', 'utf8')

var template = fs.readFileSync('./templates/stats.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  moduleVersion: module.version,
  moduleSize: moduleSize,
  moduleObj: moduleObj,
  siteFooter: siteFooter
})

fs.writeFileSync('./stats/index.html', html)
