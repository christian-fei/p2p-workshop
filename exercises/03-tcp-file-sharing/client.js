'use strict'

const net = require('net')
const fs = require('fs')

var tcpStream = net.connect(3000, 'localhost')
tcpStream.pipe(fs.createWriteStream('./output'))
