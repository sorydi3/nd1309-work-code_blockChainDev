// Configuration
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx").Transaction
var web3 = new Web3('HTTP://127.0.0.1:8545')

// Set Addresses
var sendingAddress = '0x6686f16bC4789A358C99E382C356413aE6a44A1f'
var receivingAddress = '0xcb034C02f7fd6C7fbA443c52FA6C5Ec48682A7B2'

// Create transaction
var rawTransaction = {
    nonce: 0,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1,
    data: ""
}

// Sign Transaction
var privateKeySender = '0x688db2e3ac3ba6a2a6186490421f26b5d39ca22dd2fe64854b9f742630adf9bd'
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);