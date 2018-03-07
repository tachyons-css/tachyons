const postcss = require('postcss')
const atImport = require('postcss-import')
const removeComments = require('postcss-discard-comments')
const isRoot = require('is-css-root')

module.exports = async (srcCss, opts) => {
  const rows = []
  const getRows = postcss.plugin('get-rows', () => css => {
    css.walkRules(rule => {
      if (isRoot(rule.selector)) {
        return
      }

      const selector = rule.selector
      const moduleName = rule.source.input.from
      const declarations = rule.nodes.map(decl => [decl.prop, decl.value].join(': '))

      rows.push({
        selector,
        moduleName,
        declarations
      })
    })
  })

  await postcss([
    atImport(), removeComments(), getRows()
  ]).process(srcCss, opts)

  return rows
}
