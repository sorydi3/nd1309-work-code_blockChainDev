let web3 = require('web3');
let Ethereuntx = require('@ethereumjs/tx');
const common = require('ethereumjs-common').Common
//let Contract = require('web3-eth-Contract');

let url = 'http://127.0.0.1:8545'; // ganache local blockchain url
let address = '0x6686f16bC4789A358C99E382C356413aE6a44A1f'; //Ganache address //SENDING ADDRESS
let ReceavingAddress = "0xcb034C02f7fd6C7fbA443c52FA6C5Ec48682A7B2";
let PK = '688db2e3ac3ba6a2a6186490421f26b5d39ca22dd2fe64854b9f742630adf9bd'; //Private key of the sender
let PKHex = new Buffer(PK,'hex');
let WEB3 = new web3(url);


//CHECK THE BALANCE OF EACH OF THE ADDRESSES
WEB3.eth.getBalance(address,(err,bal) => {balance  = bal;}).then((bal_) =>{
    let numEth = WEB3.utils.fromWei(bal_)
    console.log(`SENDER BALANCE IS:  ${numEth}`);
});

// DISPLAY HERE THE BALANCE OF BOTH ACCOUNTS , THE SENDER AND THE RECEAVER
WEB3.eth.getBalance(address,(err,bal) => {balance  = bal;}).then((bal_) =>{
    let numEth = WEB3.utils.fromWei(bal_)
    console.log(`RECEAVER BALANCE IS: ${numEth}`);
});

WEB3.eth.getTransactionCount(ReceavingAddress).then((count) =>{
    console.log(`THE TRANSACTION ACOUNT OF THE EOA IS THE FOLLOWING NUMBER: ${count}`);
});

// HERE WE CREATE A TRANSACTION

WEB3.eth.getAccounts().then((count) =>{
    console.log(`DISPLAY THE NUMBER AVAILABLE IN THE CHAIN: ${count}`);
});

const networkId =   WEB3.eth.net.getId();
const chainId =  WEB3.eth.getChainId();

const customCommon = common.forCustomChain(
    'mainnet',
    {
      name: 'my-network',
      networkId: networkId,
      chainId: chainId,
    },
    'petersburg',
  );

let rawTransaction = {
    nonce : 0,
    to : ReceavingAddress,
    gasPrice : 2000000,
    gasLimit : 30000,
    value :1,
    data : ""
}

console.log(`TRANSACTION BEING CARRIED OUT IS THE FOLLOWING: ${rawTransaction}`);
 
var EtherTransaction = new Ethereuntx.Transaction(rawTransaction,{common: customCommon},); // CREATING A RAW TRANSACTION
EtherTransaction.sign(PKHex); // SENDER SIGNING THE TRANSACTION

//NOW WE SEND THE TRANSACTION TO THE NEWORK, IN OUR CASE IN THE LOCAL GANACHE NETWORK.
let serializedTransaction = EtherTransaction.serialize();
WEB3.eth.sendSignedTransaction(serializedTransaction);

