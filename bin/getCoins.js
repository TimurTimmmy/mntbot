module.exports.getCoins = function (callback){
    const https = require('https');
    https.get('https://testnet.explorer.minter.network/api/v1/coins/', (resp) => {
        let data ='';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end',() => {
            callback(JSON.parse(data).data);
        });
    }).on("error", (err) => {
        callback(err.message);
    });
};

module.exports.Coin = async function test(){
    const request = require('request-promise');

    let options = {
        uri: 'https://testnet.explorer.minter.network/api/v1/coins/',
        method: 'GET',
        json: true
    };
    let result = await request(options);
    return result.data;
};