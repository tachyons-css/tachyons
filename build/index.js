const fs = require('fs')
const globby = require('globby')

const pattern = [
  'src/**/*.css',
  '!src/tachyons.css',
  '!src/_debug_children.css',
  '!src/_normalize.css'
]

globby(pattern).then(paths => {
  paths.forEach(path => {
    const name = path.replace('src/_', '').replace('.css', '')
    const css = fs.readFileSync(`../${path}`, 'utf8')
    writeFileSync(`../packages/${name}/src/tachyons-${name}.css`, css)
  })
})
