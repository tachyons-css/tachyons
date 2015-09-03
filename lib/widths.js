var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var postcss = require('postcss')
var cssstats = require('cssstats')

var widths = require('tachyons-widths/package.json')
var widthsCss = fs.readFileSync('node_modules/tachyons-widths/tachyons-widths.min.css', 'utf8')
var widthsObj = cssstats(widthsCss)
var widthsSize = filesize(widthsObj.gzipSize)

var srcCSS = fs.readFileSync('./src/_widths.css', 'utf8')
var navDocs = fs.readFileSync('./templates/nav_docs.html', 'utf8')
var siteFooter = fs.readFileSync('./templates/footer.html', 'utf8')


var template = fs.readFileSync('./templates/docs/widths/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  widthsVersion: widths.version,
  widthsSize: widthsSize,
  widthsObj:widthsObj,
  srcCSS: srcCSS,
  navDocs: navDocs,
  siteFooter: siteFooter
})

fs.writeFileSync('./docs/layout/widths/index.html', html)
