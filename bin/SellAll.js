module.exports.sellAll = function(pk, tosell, tobuy){
    const {Minter} = require('minter-js-sdk');
    const minter = new Minter({apiType: 'node', baseURL: 'https://minter-node-1.testnet.minter.network/'});

    const {SellAllTxParams} = require('minter-js-sdk');
    const sell = new SellAllTxParams({
            privateKey: pk,
            chainId: 2,
            coinFrom: tosell,
            coinTo: tobuy
        }
    );
    minter.postTx(sell)
        .then((result) => {
            console.log("transaction: " + result);
            console.log('You sell all: ' + tosell);}
        )
        .catch((error) => {
            console.log(error);
        });
};