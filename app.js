// Your sandbox code goes here!
// See ./examples/*.js for code exmaples


const Web3 = require('web3')
const rpcURL = 'mainnet.infura.io/v3/e8cc7c8e245b46b482873ce9382a542b' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0x6F7d7d68c3Eed4Df81CF5F97582deef8ABC51533' // Your account address goes here
var balance = web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })


console.log(balance)