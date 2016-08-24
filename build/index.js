const fs = require('fs')
const globby = require('globby')

const pattern = [
  'src/**/*.css',
  '!src/tachyons.css',
  '!src/_debug_children.css',
  '!src/_normalize.css'
]

globby(pattern)
  .then(paths => paths.forEach(processPackage))
  .catch(console.error)

const processPackage = path => {
  const name = path.replace('src/_', '').replace('.css', '')
  const css = fs.readFileSync(path, 'utf8')

  console.log(`building ${path}`)
  fs.writeFileSync(`packages/tachyons-${name}/src/tachyons-${name}.css`, css)
}
