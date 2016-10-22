'use strict'

const net = require('net')
const fs = require('fs')

var server = net.createServer(function (socket) {
	const fileStream = fs.createReadStream(__filename)
	.pipe(socket)
})

server.listen(3000)
