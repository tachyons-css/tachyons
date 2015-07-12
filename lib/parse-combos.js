// lib/parse-combos.js
var colorable = require('colorable')

module.exports = function(colors) {

  var combos = []
  // Get the Colorable array
  var arr = colorable(colors)

  // Flatten the array and combine the foreground and background colors
  arr.forEach(function(color) {
    var pairing = color.hex
    color.combinations.forEach(function(combo) {
      combo.pairing = pairing
      combos.push(combo)
    })
  })

  // Sort the array by contrast from high to low
  combos.sort(function(a, b) {
    return b.contrast - a.contrast
  })

  return combos

}
