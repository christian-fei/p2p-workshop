'use strict'
const fs = require('fs')
const crypto = require('crypto')

let fileContents = ''
const hash = crypto.createHash('sha256')
const fileStream = fs.createReadStream(__filename)

fileStream.on('data', (chunk) => fileContents+=chunk)
fileStream.on('end', () => {
	hash.update(fileContents)
	const digest = hash.digest('hex')

	console.log('-- hash is', digest)
})


