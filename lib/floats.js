var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var postcss = require('postcss')
var cssstats = require('cssstats')

var module = require('tachyons-floats/package.json')
var moduleCss = fs.readFileSync('node_modules/tachyons-floats/tachyons-floats.min.css', 'utf8')
var moduleObj = cssstats(moduleCss)
var moduleSize = filesize(moduleObj.gzipSize)

var srcCSS = fs.readFileSync('./src/_floats.css', 'utf8')
var navDocs = fs.readFileSync('./templates/nav_docs.html', 'utf8')
var siteFooter  = fs.readFileSync('./templates/footer.html', 'utf8')

var template = fs.readFileSync('./templates/docs/floats/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  moduleVersion: module.version,
  moduleSize: moduleSize,
  moduleObj: moduleObj,
  srcCSS: srcCSS,
  navDocs: navDocs,
  siteFooter: siteFooter
})

fs.writeFileSync('./docs/layout/floats/index.html', html)
