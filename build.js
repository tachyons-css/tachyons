// dependencies

var fs = require("fs")
var filesize = require("filesize")
var gzipSize = require("gzip-size")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var cssvariables = require('postcss-css-variables')
var customMedia = require("postcss-custom-media")

// css to be processed
var css = fs.readFileSync("src/tachyons.css", "utf8")

// process css
var output = postcss([autoprefixer])
  .use(atImport())
  .use(cssvariables())
  .use(conditionals())
  .use(customMedia())
  .process(css, {
    from: "src/tachyons.css",
    to: "css/tachyons.css"
  })
  .css

fs.writeFile("css/tachyons.css", output, 'utf-8')
uncompressed = fs.statSync("css/tachyons.css")
var uncompressedSize = uncompressed["size"]
var gzippedSRC = gzipSize.sync(output)
console.log("This file starts out at " + filesize(uncompressedSize) + " which would be " + filesize(gzippedSRC))

//console.log(filesize(output.css))

// Using YUI Compressor for CSS
new compressor.minify({
    type: 'sqwish',
    fileIn: 'css/tachyons.css',
    fileOut: 'css/tachyons.min.css',
    callback: function(err, min){
    //console.log('Sqwish');
    //console.log(err);
    }
});

var minified = fs.statSync("css/tachyons.min.css", "utf8")
var gzipped = gzipSize.sync(fs.readFileSync("css/tachyons.min.css", "utf8"))

var minifiedSize = minified["size"]


console.log("After minification it is " + filesize(minifiedSize))
console.log("After gzipping it is " + filesize(gzipped)  + "instead of " + filesize(gzipped))
