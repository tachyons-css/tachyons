const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const atImport = require('postcss-import')
const customMedia = require('postcss-custom-media')
const cssVariables = require('postcss-css-variables')
const removeComments = require('postcss-discard-comments')
const removeEmpty = require('postcss-discard-empty')
const select = require('postcss-select')
const mqPacker = require('css-mqpacker')
const perfectionist = require('perfectionist')
const cssstats = require('cssstats')
const getClasses = require('get-classes-from-html')

module.exports = function (content) {
  const callback = this.async()
  const srcPath = path.join(process.cwd(), 'node_modules/tachyons/src/tachyons.css')

  const srcCss = fs.readFileSync(srcPath, 'utf8')
  const classes = getClasses(content).map(c => `.${c}`)

  const plugins = [
    atImport(),
    cssVariables(),
    customMedia(),
    select(classes),
    removeComments({ removeAll: true }),
    mqPacker(),
    removeEmpty(),
    perfectionist()
  ]

  postcss(plugins)
    .process(srcCss, { from: srcPath })
    .then(({ css }) => {
      const stats = cssstats(css)

      const meta = {
        stats,
        classes
      }

      const code = `
        const css = ${JSON.stringify(css)}
        const html = ${JSON.stringify(content)}
        const meta = ${JSON.stringify(meta)}

        export { css, html, meta }
      `

      return callback(null, code)
    })
    .catch(err => callback(err))
}
