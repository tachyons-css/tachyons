var fs = require('fs')
var path = require('path')
var pkg = require('../package.json')
var tachyonsModules = require('tachyons-modules')
var copy = require('copy-files')

tachyonsModules().then(function (cssModules) {
  var filteredModules = cssModules.filter(function (module) {
    return [
      // TODO: Fix me : (
      'tachyons-colors',
      'tachyons-base',
      'tachyons-webpack',
      'tachyons-display-verbose',
      'tachyons-build-css'
    ].indexOf(module.name) == -1
  }).map(function (cssModule) {
    return cssModule.name
  })

  filteredModules.push('normalize.css')
  var files = constructFiles(filteredModules)

  copy({
    files: files,
    dest: path.join(__dirname, '../src'),
    overwrite: true
  }, function (err) {
    if (err) {
      console.error('Error occurred copying files')
      console.error(err)
      process.exit(1)
    }
  })

  var srcCss = fs.readFileSync('./build/_tachyons.css', 'utf8')
  var banner = '/* TACHYONS v' + pkg.version + '| github.com/tachyons-css/tachyons */\n\n'
  console.log(banner)
  fs.writeFileSync(path.join(__dirname, '../src/tachyons.css'), banner + srcCss)
})

function constructFiles (modules) {
  var files = {}
  modules.forEach(function (module) {
    console.log('Copying ' + module)
    var moduleLocation = getModuleCssLocation(module)
    var moduleName = getModuleKey(module)
    files['_' + moduleName + '.css'] = moduleLocation
  })

  return files
}

function isTachyonsModule (module) {
  return module.indexOf('tachyons') !== -1
}

function isNormalizeModule (module) {
  return module === 'normalize.css'
}

function getModuleCssLocation (module) {
  try {
    if (isTachyonsModule(module)) {
      return 'node_modules/' + module + '/' + require('../node_modules/' + module + '/package.json').style
    } else if (isNormalizeModule(module)) {
      return 'node_modules/' + module + '/' + module
    } else {
      console.error('Unknown module: ' + module)
    }
  } catch (e) {
    console.log(e)
  }
}

function getModuleKey (module) {
  return module.replace(/(tachyons-|\.css)/ig, '')
}
