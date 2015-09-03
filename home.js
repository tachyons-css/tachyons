var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var postcss = require('postcss')
var cssstats = require('cssstats')

var tachyons = require('./package.json')
// Include Tachyons Module Packages
var backgroundSize = require('tachyons-background-size/package.json')
var base = require('tachyons-base/package.json')
var borderColors = require('tachyons-border-colors/package.json')
var borderRadius = require('tachyons-border-radius/package.json')
var borderStyle = require('tachyons-border-style/package.json')
var borderWidths = require('tachyons-border-widths/package.json')
var borders = require('tachyons-borders/package.json')
var boxSizing = require('tachyons-box-sizing/package.json')
var clears = require('tachyons-clears/package.json')
var colors = require('tachyons-colors/package.json')
var debug = require('tachyons-debug/package.json')
var floats = require('tachyons-floats/package.json')
var fontFamily = require('tachyons-font-family/package.json')
var fontStyle = require('tachyons-font-style/package.json')
var fontWeight = require('tachyons-font-weight/package.json')
var forms = require('tachyons-forms/package.json')
var heights = require('tachyons-heights/package.json')
var images = require('tachyons-images/package.json')
var letterSpacing = require('tachyons-letter-spacing/package.json')
var lineHeight = require('tachyons-line-height/package.json')
var links = require('tachyons-links/package.json')
var lists = require('tachyons-lists/package.json')
var maxWidths = require('tachyons-max-widths/package.json')
var overflow = require('tachyons-overflow/package.json')
var position = require('tachyons-position/package.json')
var queries = require('tachyons-queries/package.json')
var skins = require('tachyons-skins/package.json')
var spacing = require('tachyons-spacing/package.json')
var textAlign = require('tachyons-text-align/package.json')
var textDecoration = require('tachyons-text-decoration/package.json')
var textTransform = require('tachyons-text-transform/package.json')
var typeScale = require('tachyons-type-scale/package.json')
var typography = require('tachyons-typography/package.json')
var utilities = require('tachyons-utilities/package.json')
var verticalAlign = require('tachyons-vertical-align/package.json')
var visibility = require('tachyons-visibility/package.json')
var whiteSpace = require('tachyons-white-space/package.json')
var widths = require('tachyons-widths/package.json')
var display = require('tachyons-display/package.json')

// Size of files

var backgroundSizeCss = fs.readFileSync('node_modules/tachyons-background-size/tachyons-background-size.min.css', 'utf8')
var backgroundSizeObj = cssstats(backgroundSizeCss)
var backgroundSizeSize = filesize(backgroundSizeObj.gzipSize)

var baseCss = fs.readFileSync('node_modules/tachyons-base/tachyons-base.min.css', 'utf8')
var baseObj = cssstats(baseCss)
var baseSize = filesize(baseObj.gzipSize)

var borderColorsCss = fs.readFileSync('node_modules/tachyons-border-colors/tachyons-border-colors.min.css', 'utf8')
var borderColorsObj = cssstats(borderColorsCss)
var borderColorsSize = filesize(borderColorsObj.gzipSize)

var borderRadiusCss = fs.readFileSync('node_modules/tachyons-border-radius/tachyons-border-radius.min.css', 'utf8')
var borderRadiusObj = cssstats(borderRadiusCss)
var borderRadiusSize = filesize(borderRadiusObj.gzipSize)

var borderStyleCss = fs.readFileSync('node_modules/tachyons-border-style/tachyons-border-style.min.css', 'utf8')
var borderStyleObj = cssstats(borderStyleCss)
var borderStyleSize = filesize(borderStyleObj.gzipSize)

var borderWidthsCss = fs.readFileSync('node_modules/tachyons-border-widths/tachyons-border-widths.min.css', 'utf8')
var borderWidthsObj = cssstats(borderWidthsCss)
var borderWidthsSize = filesize(borderWidthsObj.gzipSize)

var bordersCss = fs.readFileSync('node_modules/tachyons-borders/tachyons-borders.min.css', 'utf8')
var bordersObj = cssstats(bordersCss)
var bordersSize = filesize(bordersObj.gzipSize)

var boxSizingCss = fs.readFileSync('node_modules/tachyons-box-sizing/tachyons-box-sizing.min.css', 'utf8')
var boxSizingObj = cssstats(boxSizingCss)
var boxSizingSize = filesize(boxSizingObj.gzipSize)

var clearsCss = fs.readFileSync('node_modules/tachyons-clears/tachyons-clears.min.css', 'utf8')
var clearsObj = cssstats(clearsCss)
var clearsSize = filesize(clearsObj.gzipSize)

//var colorsCss = fs.readFileSync('node_modules/tachyons-colors/tachyons-colors.min.css', 'utf8')
var debugCss = fs.readFileSync('node_modules/tachyons-debug/tachyons-debug.min.css', 'utf8')
var debugObj = cssstats(debugCss)
var debugSize = filesize(debugObj.gzipSize)

var floatsCss = fs.readFileSync('node_modules/tachyons-floats/tachyons-floats.min.css', 'utf8')
var floatsObj = cssstats(floatsCss)
var floatsSize = filesize(floatsObj.gzipSize)

var fontFamilyCss = fs.readFileSync('node_modules/tachyons-font-family/tachyons-font-family.min.css', 'utf8')
var fontFamilyObj = cssstats(fontFamilyCss)
var fontFamilySize = filesize(fontFamilyObj.gzipSize)

var fontStyleCss = fs.readFileSync('node_modules/tachyons-font-style/tachyons-font-style.min.css', 'utf8')
var fontStyleObj = cssstats(fontStyleCss)
var fontStyleSize = filesize(fontStyleObj.gzipSize)

var fontWeightCss = fs.readFileSync('node_modules/tachyons-font-weight/tachyons-font-weight.min.css', 'utf8')
var fontWeightObj = cssstats(fontWeightCss)
var fontWeightSize = filesize(fontWeightObj.gzipSize)

var formsCss = fs.readFileSync('node_modules/tachyons-forms/tachyons-forms.min.css', 'utf8')
var formsObj = cssstats(formsCss)
var formsSize = filesize(formsObj.gzipSize)

var heightsCss = fs.readFileSync('node_modules/tachyons-heights/tachyons-heights.min.css', 'utf8')
var heightsObj = cssstats(heightsCss)
var heightsSize = filesize(heightsObj.gzipSize)

var imagesCss = fs.readFileSync('node_modules/tachyons-images/tachyons-images.min.css', 'utf8')
var imagesObj = cssstats(imagesCss)
var imagesSize = filesize(imagesObj.gzipSize)

var letterSpacingCss = fs.readFileSync('node_modules/tachyons-letter-spacing/tachyons-letter-spacing.min.css', 'utf8')
var letterSpacingObj = cssstats(letterSpacingCss)
var letterSpacingSize = filesize(letterSpacingObj.gzipSize)

var lineHeightCss = fs.readFileSync('node_modules/tachyons-line-height/tachyons-line-height.min.css', 'utf8')
var lineHeightObj = cssstats(lineHeightCss)
var lineHeightSize = filesize(lineHeightObj.gzipSize)

var linksCss = fs.readFileSync('node_modules/tachyons-links/tachyons-links.min.css', 'utf8')
var linksObj = cssstats(baseCss)
var linksSize = filesize(baseObj.gzipSize)

var listsCss = fs.readFileSync('node_modules/tachyons-lists/tachyons-lists.min.css', 'utf8')
var listsObj = cssstats(listsCss)
var listsSize = filesize(listsObj.gzipSize)

var maxWidthsCss = fs.readFileSync('node_modules/tachyons-max-widths/tachyons-max-widths.min.css', 'utf8')
var maxWidthsObj = cssstats(maxWidthsCss)
var maxWidthsSize = filesize(maxWidthsObj.gzipSize)

var overflowCss = fs.readFileSync('node_modules/tachyons-overflow/tachyons-overflow.min.css', 'utf8')
var overflowObj = cssstats(overflowCss)
var overflowSize = filesize(overflowObj.gzipSize)

var positionCss = fs.readFileSync('node_modules/tachyons-position/tachyons-position.min.css', 'utf8')
var positionObj = cssstats(positionCss)
var positionSize = filesize(positionObj.gzipSize)

//var queriesCss = fs.readFileSync('node_modules/tachyons-queries/tachyons-queries.min.css', 'utf8')
//var baseObj = cssstats(baseCss)
//var baseSize = filesize(baseObj.gzipSize)

var skinsCss = fs.readFileSync('node_modules/tachyons-skins/tachyons-skins.min.css', 'utf8')
var skinsObj = cssstats(skinsCss)
var skinsSize = filesize(skinsObj.gzipSize)

var spacingCss = fs.readFileSync('node_modules/tachyons-spacing/tachyons-spacing.min.css', 'utf8')
var spacingObj = cssstats(spacingCss)
var spacingSize = filesize(spacingObj.gzipSize)

var textAlignCss = fs.readFileSync('node_modules/tachyons-text-align/tachyons-text-align.min.css', 'utf8')
var textAlignObj = cssstats(textAlignCss)
var textAlignSize = filesize(textAlignObj.gzipSize)

var textDecorationCss = fs.readFileSync('node_modules/tachyons-text-decoration/tachyons-text-decoration.min.css', 'utf8')
var textDecorationObj = cssstats(textDecorationCss)
var textDecorationSize = filesize(textDecorationObj.gzipSize)

var textTransformCss = fs.readFileSync('node_modules/tachyons-text-transform/tachyons-text-transform.min.css', 'utf8')
var textTransformObj = cssstats(textTransformCss)
var textTransformSize = filesize(textTransformObj.gzipSize)

var typeScaleCss = fs.readFileSync('node_modules/tachyons-type-scale/tachyons-type-scale.min.css', 'utf8')
var typeScaleObj = cssstats(typeScaleCss)
var typeScaleSize = filesize(typeScaleObj.gzipSize)

var typographyCss = fs.readFileSync('node_modules/tachyons-typography/tachyons-typography.min.css', 'utf8')
var typographyObj = cssstats(typographyCss)
var typographySize = filesize(typographyObj.gzipSize)

var utilitiesCss = fs.readFileSync('node_modules/tachyons-utilities/tachyons-utilities.min.css', 'utf8')
var utilitiesObj = cssstats(utilitiesCss)
var utilitiesSize = filesize(utilitiesObj.gzipSize)

var verticalAlignCss = fs.readFileSync('node_modules/tachyons-vertical-align/tachyons-vertical-align.min.css', 'utf8')
var verticalAlignObj = cssstats(verticalAlignCss)
var verticalAlignSize = filesize(verticalAlignObj.gzipSize)

var visibilityCss = fs.readFileSync('node_modules/tachyons-visibility/tachyons-visibility.min.css', 'utf8')
var visibilityObj = cssstats(visibilityCss)
var visibilitySize = filesize(visibilityObj.gzipSize)

var whiteSpaceCss = fs.readFileSync('node_modules/tachyons-white-space/tachyons-white-space.min.css', 'utf8')
var whiteSpaceObj = cssstats(whiteSpaceCss)
var whiteSpaceSize = filesize(whiteSpaceObj.gzipSize)

var widthsCss = fs.readFileSync('node_modules/tachyons-widths/tachyons-widths.min.css', 'utf8')
var widthsObj = cssstats(widthsCss)
var widthsSize = filesize(widthsObj.gzipSize)

var displayCss = fs.readFileSync('node_modules/tachyons-display/tachyons-display.min.css', 'utf8')
var displayObj = cssstats(displayCss)
var displaySize = filesize(displayObj.gzipSize)

var srcDir = fs.readdirSync('./src/')

var filesCount = srcDir.length - 3

//var parseColors = require('./lib/parse-colors')
//var parseCombos = require('./lib/parse-combos')

var css = fs.readFileSync('./css/tachyons.css', 'utf8')
//var colors = parseColors(css)
//var combos = parseCombos(colors)


//var astObj = JSON.stringify(ast, null, '\t')
//var stats = JSON.stringify(obj, null, '\t')

//var ast = postcss.parse(css)
var obj = cssstats(css)
var size = filesize(gzip.sync(fs.readFileSync("css/tachyons.min.css", "utf8")))

var template = fs.readFileSync('./templates/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  size: size,
  version: tachyons.version,
  modulesCount: filesCount,
  backgroundSizeVersion: backgroundSize.version,
  backgroundSizeSize: backgroundSizeSize,
  baseVersion: base.version,
  borderColorsVersion: borderColors.version,
  borderRadiusVersion: borderRadius.version,
  borderStyleVersion: borderStyle.version,
  borderWidthsVersion: borderWidths.version,
  bordersVersion: borders.version,
  boxSizingVersion: boxSizing.version,
  clearsVersion: clears.version,
  colorsVersion: colors.version,
  debugVersion: debug.version,
  displayVersion: display.version,
  floatsVersion: floats.version,
  fontFamilyVersion: fontFamily.version,
  fontStyleVersion: fontStyle.version,
  fontWeightVersion: fontWeight.version,
  formsVersion: forms.version,
  heightsVersion: heights.version,
  imagesVersion: images.version,
  letterSpacingVersion: letterSpacing.version,
  lineHeightVersion: lineHeight.version,
  linksVersion: links.version,
  listsVersion: lists.version,
  maxWidthsVersion: maxWidths.version,
  overflowVersion: overflow.version,
  positionVersion: position.version,
  queriesVersion: queries.version,
  skinsVersion: skins.version,
  spacingVersion: spacing.version,
  textAlignVersion: textAlign.version,
  textDecorationVersion: textDecoration.version,
  textTransformVersion: textTransform.version,
  typeScaleVersion: typeScale.version,
  typographyVersion: typography.version,
  utilitiesVersion: utilities.version,
  verticalAlignVersion: verticalAlign.version,
  visibilityVersion: visibility.version,
  whiteSpaceVersion: whiteSpace.version,
  widthsVersion: widths.version,
  // Sizes
  backgroundSizeSize: backgroundSizeSize,
  backgroundSizeSize: backgroundSizeSize,
  baseSize: baseSize,
  borderColorsSize: borderColorsSize,
  borderRadiusSize: borderRadiusSize,
  borderStyleSize: borderStyleSize,
  borderWidthsSize: borderWidthsSize,
  bordersSize: bordersSize,
  boxSizingSize: boxSizingSize,
  clearsSize: clearsSize,
  //colorsSize: colorsSize,
  debugSize: debugSize,
  displaySize: displaySize,
  floatsSize: floatsSize,
  fontFamilySize: fontFamilySize,
  fontStyleSize: fontStyleSize,
  fontWeightSize: fontWeightSize,
  formsSize: formsSize,
  heightsSize: heightsSize,
  imagesSize: imagesSize,
  letterSpacingSize: letterSpacingSize,
  lineHeightSize: lineHeightSize,
  linksSize: linksSize,
  listsSize: listsSize,
  maxWidthsSize: maxWidthsSize,
  overflowSize: overflowSize,
  positionSize: positionSize,
  //queriesSize: queriesSize,
  skinsSize: skinsSize,
  spacingSize: spacingSize,
  textAlignSize: textAlignSize,
  textDecorationSize: textDecorationSize,
  textTransformSize: textTransformSize,
  typeScaleSize: typeScaleSize,
  typographySize: typographySize,
  utilitiesSize: utilitiesSize,
  verticalAlignSize: verticalAlignSize,
  visibilitySize: visibilitySize,
  whiteSpaceSize: whiteSpaceSize,
  widthsSize: widthsSize,
  // Obj
  backgroundSizeObj: backgroundSizeObj,
  baseObj: baseObj,
  borderColorsObj: borderColorsObj,
  borderRadiusObj:borderRadiusObj,
  borderStyleObj:borderStyleObj,
  borderWidthsObj:borderWidthsObj,
  bordersObj:bordersObj,
  boxSizingObj:boxSizingObj,
  clearsObj:clearsObj,
  debugObj:debugObj,
  displayObj:displayObj,
  floatsObj:floatsObj,
  fontFamilyObj:fontFamilyObj,
  fontStyleObj:fontStyleObj,
  fontWeightObj:fontWeightObj,
  formsObj:formsObj,
  heightsObj:heightsObj,
  imagesObj:imagesObj,
  letterSpacingObj:letterSpacingObj,
  lineHeightObj:lineHeightObj,
  linksObj:linksObj,
  listsObj:listsObj,
  maxWidthsObj:maxWidthsObj,
  overflowObj:overflowObj,
  positionObj:positionObj,
  skinsObj:skinsObj,
  spacingObj:spacingObj,
  textAlignObj:textAlignObj,
  textDecorationObj:textDecorationObj,
  textTransformObj:textTransformObj,
  typeScaleObj:typeScaleObj,
  typographyObj:typographyObj,
  utilitiesObj:utilitiesObj,
  verticalAlignObj:verticalAlignObj,
  visibilityObj:visibilityObj,
  whiteSpaceObj:whiteSpaceObj,
  widthsObj:widthsObj,
})

fs.writeFileSync('./index.html', html)

console.log(size)
