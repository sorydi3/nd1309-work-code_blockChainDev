let web3 = require('web3');

let url = 'https://mainnet.infura.io/v3/cacab588e4cd4d4c9bddbb720141d101';
let address = '0x912C562dA8161efa6977Dccc0dc50A4e31F3CC7a';

let WEB3 = new web3(url);

WEB3.eth.getBalance(address,(err,bal) => {balance  = bal;}).then((bal_) =>{
    let numEth = WEB3.utils.fromWei(bal_)
    console.log(`Your balance is ${numEth}`);
});


WEB3.eth.getTransactionCount(address).then((count) =>{
    console.log(`THE TRANSACTION ACOUNT OF THE EOA IS THE FOLLOWING NUMBER: ${count}`);
});