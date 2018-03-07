const path = require('path')
const cssTable = require('css-table')
const { readFileSync, writeFileSync } = require('fs')

const { dependencies } = require('./package.json')

const px = Object.keys(dependencies)
  .filter(m => /^tachyons-/.test(m))
  .filter(m => !/^tachyons-(colors|generator|styles)/.test(m))
  .map(async m => {
    const pkg = require(`${m}/package.json`)
    const readme = readFileSync(
      path.resolve('node_modules', m, 'readme.md'),
      'utf8'
    )
    const src = readFileSync(
      path.resolve('node_modules', m, 'src', `${m}.css`),
      'utf8'
    )
    const css = readFileSync(
      path.resolve('node_modules', m, 'css', `${m}.css`),
      'utf8'
    )

    const tableOfStyles = await cssTable(css, { from: m })

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

  writeFileSync('data.json', JSON.stringify({ modules: reduced }, null, 2))
})
