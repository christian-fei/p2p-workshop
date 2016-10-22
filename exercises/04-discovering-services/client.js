'use strict'
const DC = require('discovery-channel')
const channel = DC()
const net = require('net')
const fs = require('fs')



// Ask to be notified of 'my-channel-id' servers
channel.join('my-channel-id')

channel.once('peer', function (id, peer) {
  console.log('Found a new peer:', peer)
	var tcpStream = net.connect(peer.port, peer.host)
	tcpStream.pipe(fs.createWriteStream('./output'))
})
