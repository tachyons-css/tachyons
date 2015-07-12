var _ = require('lodash')
var postcss = require('postcss')
var Color = require('color')

module.exports = function(css) {

  var colors = []
  var root = postcss.parse(css)

  // Iterate through each color and background-color declaration
  root.eachDecl(/(color|background\-color)/, function(decl) {
    // Add each color value to the colors array
    colors.push(decl.value)
  })

  // Convert all color values to hex strings
  colors = colors.map(function(color) {
    var hex
    try {
      hex = Color(color).hexString()
      return hex
    } catch(e) {
      // Handle color values like inherit and currentcolor
      return false
    }
  })
  .filter(function(value) {
    // Remove false values
    return value
  })

  // Remove duplicate values
  colors = _.uniq(colors)

  return colors

}
