'use strict'
const DC = require('discovery-channel')
const channel = DC()
const net = require('net')
const fs = require('fs')
const assert = require('assert')
const hashOfStream = require('hash-of-stream')

let fileContents = ''
const serverId = process.argv[2]

console.log('-- join', serverId)
channel.join(serverId)

channel.once('peer', function (id, peer) {
  console.log('Found a new peer:', peer)
	var tcpStream = net.connect(peer.port, peer.host)
	tcpStream.pipe(fs.createWriteStream('./output'))
	hashOfStream(tcpStream, (hash) => {
		assert.equal(serverId, hash, 'hashes are not the same!!')
		console.log('-- hashes are the same!')
	})
})
