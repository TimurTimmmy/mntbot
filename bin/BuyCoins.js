module.exports.buyCoins = function(pk, tosell, amount, tobuy){
    const {Minter} = require('minter-js-sdk');
    const minter = new Minter({apiType: 'node', baseURL: 'https://minter-node-1.testnet.minter.network/'});

    const {BuyTxParams} = require("minter-js-sdk");
    const buy = new BuyTxParams({
            privateKey: pk,
            chainId: 2,
            coinFrom: tosell,
            coinTo: tobuy,
            buyAmount: amount
        }
    );
    minter.postTx(buy)
        .then((result) => {
            console.log("transaction: " + result);
            console.log("You buy: " + amount + " " + tobuy);
        }
        )
        .catch((error) => {
            console.log(error);
        });
};