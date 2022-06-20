let web3 = require('web3');
//let Contract = require('web3-eth-Contract');

let url = 'http://127.0.0.1:8545'; // ganache local blockchain url
let address = '0x6686f16bC4789A358C99E382C356413aE6a44A1f'; //Ganache address

let WEB3 = new web3(url);

WEB3.eth.getBalance(address,(err,bal) => {balance  = bal;}).then((bal_) =>{
    let numEth = WEB3.utils.fromWei(bal_)
    console.log(`Your balance is ${numEth}`);
});


WEB3.eth.getTransactionCount(address).then((count) =>{
    console.log(`THE TRANSACTION ACOUNT OF THE EOA IS THE FOLLOWING NUMBER: ${count}`);
});



WEB3.eth.getAccounts().then((count) =>{
    console.log(`DISPLAY THE NUMBER AVAILABLE IN THE CHAIN: ${count}`);
});


// READING CONTRACT DATA (CA)

/* let CAddress = '0x0D8775F648430679A709E98d2b0Cb6250d2887EF';
let ABI = [{ "constant": true, "inputs": [], "name": "batFundDeposit", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "batFund", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "tokenExchangeRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "finalize", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "refund", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "tokenCreationCap", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "isFinalized", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "fundingEndBlock", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "ethFundDeposit", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "createTokens", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "tokenCreationMin", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "fundingStartBlock", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "_ethFundDeposit", "type": "address" }, { "name": "_batFundDeposit", "type": "address" }, { "name": "_fundingStartBlock", "type": "uint256" }, { "name": "_fundingEndBlock", "type": "uint256" }], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "LogRefund", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "CreateBAT", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }];

let contract = new WEB3.eth.Contract(ABI, CAddress);
contract.methods.name().call((err, name) => {
    console.log(`THE NAME OF THE CONTRACT IS : ${name}`);
});


contract.methods.version().call((err, version) => {
    console.log(`THE VERSION OF THE CONTRACT IS : ${version}`);
}); */


//GANACHE LOCAL BLOCKCHAIN
