var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var postcss = require('postcss')
var cssstats = require('cssstats')

var module = require('../package.json')
var moduleCss = fs.readFileSync('./'+module.name+'.min.css', 'utf8')
var moduleObj = cssstats(moduleCss)
var moduleSize = filesize(moduleObj.gzipSize)

var srcCSS = fs.readFileSync('./'+module.name+'.css', 'utf8')

var template = fs.readFileSync('./templates/README.md', 'utf8')
var tpl = _.template(template)
var md = tpl({
  module: module,
  moduleSize: moduleSize,
  moduleObj: moduleObj,
  srcCSS: srcCSS
})

fs.writeFileSync('./README.md', md)
