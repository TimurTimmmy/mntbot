module.exports.sendTo = function(key, size, add){
    const {Minter} = require('minter-js-sdk');
    const minter = new Minter({apiType: 'node', baseURL: 'https://api.minter.stakeholder.space/'});

    const {SendTxParams} = require('minter-js-sdk');
    const send = new SendTxParams({
            privateKey: key,
            chainId: 1,
            address: add,
            amount: size,
            coinSymbol: 'BIP',
        }
    );

    minter.postTx(send);
};
