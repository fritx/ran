var basename = require('path').basename
var resolve = require('path').resolve
var rootdir = resolve(__dirname, '..')
console.log(basename(rootdir))
