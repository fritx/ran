var writeFileSync = require('fs').writeFileSync
var resolve = require('path').resolve
var configfile = require('../vars').configfile
var args = process.argv.slice(2)
var key = args[0] || ''
var value = args[1] || ''
if (!key) {
  console.error('key is missing')
}

// fixme: make it a tool dep
var config = require(configfile)
config[key] = value
writeFileSync(configfile, JSON.stringify(config, null, 2))
