module.exports.getExchange = function(sell, value, buy)
{
    const {Minter} = require('minter-js-sdk');
    const minter = new Minter({apiType: 'node', baseURL: 'https://api.minter.stakeholder.space/'});

    minter.estimateCoinSell({
        coinToSell: sell,
        valueToSell: value,
        coinToBuy: buy,
    })
        .then((result) => {
                console.log(parseFloat(result.will_get).toFixed(4));
                console.log(parseFloat(result.commission));
            }
        )
        .catch((error) => {
            console.log(error);
        })
};
