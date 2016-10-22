'use strict'
var pump = require('pump')
var fs = require('fs')

var source = fs.createReadStream(__filename)
var dest = process.stdout

pump(source, dest)
