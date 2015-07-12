var EOL = require('os').EOL
var resolve = require('path').resolve
var isAbsolute = require('path').isAbsolute
var _resolveFilename = require('module')._resolveFilename
var bgRed = require('chalk').bgRed
var builtindir = require('./vars').builtindir
var globaldir = require('./vars').config.globaldir

exports.stdpipe = function stdpipe(from, to){
  from.stdout.pipe(to.stdout)
  from.stderr.pipe(to.stderr)
  from.on('close', function(code){
    if (code) { // code != 0
      to.stdout.write(
        bgRed('exit with code:', code) + EOL
        )
    }
  })
}

exports.tofile = function tofile(target){
  target = target || './'
  var file
  try {
    // builtin path
    // --version or --help or --config
    // -v or -h or -c
    var cmdmap = {
      '-c': '--config',
      '-v': '--version',
      '-h': '--help'
    }
    target = cmdmap[target] || target
    if (target.substr(0, 2) === '--') {
      file = resolve(builtindir, target.substr(2))
      return _resolveFilename(file)
    }
    // absolute path
    // D:\mydir\mytask or /mydir/mytask
    if (isAbsolute(target)) {
      file = resolve(target)
      return _resolveFilename(file)
    }
    // relative path
    // ./mydir/mytask
    if (target.substr(0, 2) === './') {
      file = resolve(target)
      return _resolveFilename(file)
    }
    // global path
    // mydir/mytask
    if (globaldir) {
      file = resolve(globaldir, target)
      return _resolveFilename(file)
    }
  } catch(e) {
    return null // not found
  }
}
