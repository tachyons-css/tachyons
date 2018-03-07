const path = require('path')

const { readFileSync, writeFileSync } = require('fs')

const { dependencies } = require('./package.json')

const modules = Object.keys(dependencies)
  .filter(m => /^tachyons-/.test(m))
  .reduce((acc, m) => {
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

    return Object.assign(acc, {
      [m]: {
        name: m,
        version: pkg.version,
        metadata: pkg.tachyons || {},
        readme,
        src,
        css
      }
    })
  }, {})

writeFileSync('data.json', JSON.stringify({ modules }, null, 2))
