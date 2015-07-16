var _ = require('lodash')
var fs = require('fs')

var postcss = require('postcss')
var cssstats = require('cssstats')
var parseColors = require('./lib/parse-colors')
var parseCombos = require('./lib/parse-combos')

var css = fs.readFileSync('./css/tachyons.min.css', 'utf8')
var colors = parseColors(css)
var combos = parseCombos(colors)

var ast = postcss.parse(css)
var obj = cssstats(ast)

var astObj = JSON.stringify(ast, null, '\t')
var stats = JSON.stringify(obj, null, '\t')

var template = fs.readFileSync('templates/colors.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  colors: colors,
  combos: combos
})

fs.writeFileSync('docs/themes/colors/index.html', html)

