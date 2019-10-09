module.exports.getBallance = function (address, callback){
    const https = require('https');
    https.get('https://api.minter.stakeholder.space/address?address=' + address, (resp) => {
        let data ='';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end',() => {
            callback(JSON.parse(data).result.balance);
        });
    }).on("error", (err) => {
        callback(err.message);
    });
};

module.exports.Ballance = async function (address) {
    const request = require('request-promise');

    let options = {
        uri: 'https://api.minter.stakeholder.space/address?address=' + address,
        method: 'GET',
        json: true
    };
    let balance = await request(options);
    let tmp = balance.result.balance;
    let res = "";
    for (key in tmp){
        res += key + ": " + (parseFloat(tmp[key])/Math.pow(10,18)).toFixed(5) + "\n";
    }
    return res;
};