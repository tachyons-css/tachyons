const fs = require('fs')
const globby = require('globby')
const stripComments = require('strip-css-comments')

const pattern = [
  'src/**/*.css',
  '!src/tachyons.css',
  '!src/_debug-children.css',
  '!src/_debug-grid.css',
  '!src/_nested.css',
  '!src/_normalize.css',
  '!src/_media-queries.css',
  '!src/_module-template.css',
  '!src/_code.css' // TODO: make this a module
]

const mq = stripComments(
  fs.readFileSync('src/_media-queries.css', 'utf8'),
  { preserve: false }
)

globby(pattern)
  .then(paths => paths.forEach(processPackage))
  .catch(console.error)

const processPackage = path => {
  const name = path.replace('src/_', '').replace('.css', '')
  let css = fs.readFileSync(path, 'utf8')

  if (/@media/.test(css)) {
    css = `${mq}${css}`
  }

  fs.writeFileSync(`packages/tachyons-${name}/src/tachyons-${name}.css`, css)
}
