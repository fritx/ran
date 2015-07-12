#!/usr/bin/env node
var spawn = require('child_process').spawn
var bgRed = require('chalk').bgRed
var tofile = require('../lib').tofile
var stdpipe = require('../lib').stdpipe

var args = process.argv.slice(2)
var file = tofile(args[0])
if (!file) {
  console.error(bgRed('task not found'))
  return
}

args[0] = file
var prc = spawn('node', args) // bypass args
stdpipe(prc, process)
