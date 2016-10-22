'use strict'
const DC = require('discovery-channel')
const channel = DC()
const net = require('net')
const fs = require('fs')
var hashOfStream = require('hash-of-stream')

var server = net.createServer(function (socket) {
	const fileStream = fs.createReadStream(__filename)
	.pipe(socket)
})

server.listen(3000)

const fileStream = fs.createReadStream(__filename)
hashOfStream(fileStream, (hash) => {
	console.log('-- hash', hash)
	channel.join(hash, 3000)
})

