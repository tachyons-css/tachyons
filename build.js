var pkg = require('./package.json')
var tachyonsModules = require('tachyons-modules')
var copy = require('copy-files')

tachyonsModules().then(function (cssModules) {
  cssModules = cssModules.filter(function (module) {
    return [
      'tachyons-border-colors',
      'tachyons-colors'
    ].indexOf(cssModule.name) == -1
  }).cssModules.map(function (cssModule) {
    return cssModule.name
  })

  var files = constructFiles(cssModules.push('normalize.css'))

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
})

function constructFiles (modules) {
  var files = {}
  modules.forEach(function (module) {
    var moduleLocation = getModuleCssLocation(module)
    var moduleName = getModuleKey(module)
    files['_' + moduleName + '.css'] = moduleLocation
  })
}

function isTachyonsModule (module) {
  return module.indexOf('tachyons') !== -1
}

function isNormalizeModule (module) {
  return module === 'normalize.css'
}

function getModuleCssLocation (module) {
  if (isTachyonsModule(module)) {
    return require('./' + __dirname + '/node_modules/' + module + '/package.json').style
  } else if (isNormalizeModule(module)) {
    return __dirname + '/node_modules/' + module + '/' + module
  } else {
    console.error('Unknown module: ' + module)
  }
}

function getModuleKey (module) {
  return module.replace(/(tachyons-|\.css)/ig, '')
}
