var resolve = require('path').resolve
var userhome = require('user-home')

var pkg = exports.pkg = require('./package')
var dotkey = exports.dotkey = '.ran'
var dotdir = exports.dotdir =
  resolve(userhome, dotkey, 'v' + pkg.version)
var builtindir = exports.builtindir =
  resolve(dotdir, 'builtin')
var configfile = exports.configfile =
  resolve(dotdir, 'config.json')

try {
  exports.config = require(configfile)
} catch(e) {
  exports.config = null
}
