'use strict'
const DC = require('discovery-channel')
const channel = DC()
const net = require('net')
const fs = require('fs')

var server = net.createServer(function (socket) {
	const fileStream = fs.createReadStream(__filename)
	.pipe(socket)
})

server.listen(3000)

// Announce that your server is listening on port 3000
// to anyone asking for 'my-channel-id'
channel.join('my-channel-id', 3000)
