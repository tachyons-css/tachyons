var pkg = require('./package.json')

var modules = Object.keys(pkg.devDependencies).filter(function (module) {
  return module !== 'tachyons-cli'
})

console.log(modules)
