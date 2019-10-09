module.exports.getWallet = function(mnemonic){
    const {walletFromMnemonic} = require("minter-js-sdk");
    const wallet = walletFromMnemonic(mnemonic);

    let wallnfo = [
        wallet.getAddressString(),
        wallet.getPrivateKeyString()
    ];
    return wallnfo;
};