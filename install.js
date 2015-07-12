var resolve = require('path').resolve
var existsSync = require('fs-extra').existsSync
var copySync = require('fs-extra').copySync
var dotdir = require('./vars').dotdir

if (!existsSync(dotdir)) {
  var files = [
    'node_modules',
    'package.json',
    'vars.js',
    'config.json',
    'builtin'
  ]
  files.forEach(function(file){
    copySync(
      resolve(__dirname, file),
      resolve(dotdir, file)
      )
  })
}
