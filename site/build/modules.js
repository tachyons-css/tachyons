const path = require('path')
const cssTable = require('css-table')
const { readFileSync, writeFileSync } = require('fs')

const { dependencies } = require('../package.json')

const px = Object.keys(dependencies)
  .filter(m => /^tachyons-/.test(m))
  .filter(m => !/^tachyons-(colors|generator|styles|component-loader)/.test(m))
  .map(async m => {
    const pkg = require(`${m}/package.json`)
    const src = readFileSync(
      path.resolve('..', 'src', `_${m.replace(/^tachyons-/, '')}.css`),
      'utf8'
    )
    const css = readFileSync(
      path.resolve('node_modules', m, 'css', `${m}.css`),
      'utf8'
    )

    const docsComment = src.match(/\/\*!!!([\S\s]*?)\*\//m)
    const readme = docsComment && docsComment[0].replace(/^\/\*!!!/, '').replace(/\*\/$/, '')

    const tableOfStyles = await cssTable(src, { from: m })

    return {
      name: m,
      version: pkg.version,
      metadata: pkg.tachyons || {},
      tableOfStyles,
      readme,
      src,
      css
    }
  })

Promise.all(px).then(modules => {
  const reduced = modules.reduce(
    (acc, m) => Object.assign(acc, { [m.name]: m }),
    {}
  )

  writeFileSync('data/modules.json', JSON.stringify({ modules: reduced }, null, 2))
})
