const Web3 = require('web3')
const rpcURL = 'https://kovan.infura.io/v3/e8cc7c8e245b46b482873ce9382a542b' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0x6F7d7d68c3Eed4Df81CF5F97582deef8ABC51533' // Your account address goes here
let result = web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })


async function LogResult(){
    console.log(await web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') }));
}


LogResult();