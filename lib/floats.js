var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var postcss = require('postcss')
var cssstats = require('cssstats')

var floats = require('tachyons-floats/package.json')
var floatsCss = fs.readFileSync('node_modules/tachyons-floats/tachyons-floats.min.css', 'utf8')
var floatsObj = cssstats(floatsCss)
var floatsSize = filesize(floatsObj.gzipSize)

var srcCSS = fs.readFileSync('./src/_floats.css', 'utf8')

var template = fs.readFileSync('./templates/docs/floats/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  floatsVersion: floats.version,
  floatsSize: floatsSize,
  floatsObj:floatsObj,
  srcCSS: srcCSS
})

fs.writeFileSync('./docs/layout/floats/index.html', html)
