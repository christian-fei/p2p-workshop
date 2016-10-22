'use strict'

const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
	const fileStream = fs.createReadStream(__filename)
	fileStream.pipe(res)
}).listen(3000)
