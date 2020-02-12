var Web3 = require('web3')

// Infurea endpoint for MainNet
var address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
var url = 'https://mainnet.infura.io/v3/e8cc7c8e245b46b482873ce9382a542b';
var web3 = new Web3(url)

var balance = getBalance(address)
//console.log(balance) // Promise Pending... Need to use async with callbacks.

async function getBalance(address){
    await logBalance(address)
    return await web3.eth.getBalance(address, (err, bal) => { balance = bal })
}

//var eth = web3.utils.fromWei(balance, 'ether')
async function logBalance(address){
    var bal =  await web3.eth.getBalance(address, (err, bal) => { balance = bal })
    console.log('Account Balance: ', web3.utils.fromWei(bal, 'ether'));//web3.utils.fromWei(balance, 'ether'))
    
}


/*
Create a new account on the Ethereum Network
*/

// This needs to be handles with a promise.
//var newAccount = web3.eth.Create();