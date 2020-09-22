const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9097f604d956821fccddbeda260007751fdc77741843a185f1337fa57bb9f8a5');

const myWalletAddress = myKey.getPublic('hex');




let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);



console.log('\n starting the miner..');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('\n balance of xavier is ', savjeeCoin.getBalenceOfAdress(myWalletAddress));




