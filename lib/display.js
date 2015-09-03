var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var postcss = require('postcss')
var cssstats = require('cssstats')

var display = require('tachyons-display/package.json')
var displayCss = fs.readFileSync('node_modules/tachyons-display/tachyons-display.min.css', 'utf8')
var displayObj = cssstats(displayCss)
var displaySize = filesize(displayObj.gzipSize)

var srcCSS = fs.readFileSync('./src/_display.css', 'utf8')
var navDocs = fs.readFileSync('./templates/nav_docs.html', 'utf8')


var template = fs.readFileSync('./templates/docs/display/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  displayVersion: display.version,
  displaySize: displaySize,
  displayObj: displayObj,
  srcCSS: srcCSS,
  navDocs: navDocs
})

fs.writeFileSync('./docs/layout/display/index.html', html)
