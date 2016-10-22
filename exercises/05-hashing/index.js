'use strict'
const assert = require('assert')
const crypto = require('crypto')

const hash = crypto.createHash('sha256')

const string = 'NodeConf EU 2016'

hash.update(string)

const digest = hash.digest('hex')

assert.equal('ac5a6afc8c8d15da64cd9931fd5a4ba4e716c9b5679d4d57289022a72b1fcd14', digest)

console.log('-- hash is correct', digest)
