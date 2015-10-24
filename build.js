var pkg = require('./package.json')
var copy = require('copy-files')

var ignoredModules = [
  'tachyons-cli',
  'tachyons-queries'  // For now, need to update to play nice
]

var modules = Object.keys(pkg.devDependencies).filter(function (module) {
  return (
    isTachyonsModule(module) ||
    module === 'normalize.css'
  ) && ignoredModules.indexOf(module) == -1
})

var files = {}
modules.forEach(function (module) {
  var moduleLocation = isTachyonsModule(module) ?
    __dirname + '/node_modules/' + module + '/src/' + module + '.css' :
    __dirname + '/node_modules/' + module + '/' + module

  var moduleName = module.replace(/(tachyons-|\.css)/, '')
  files['_' + moduleName + '.css'] = moduleLocation
})

copy({
  files: files,
  dest: __dirname + '/src',
  overwrite: true
}, function (err) {
  if (err) {
    console.error('Error occurred copying files')
    console.error(err)
    process.exit(1)
  }
})

function isTachyonsModule (module) {
  return module.indexOf('tachyons') !== -1
}
