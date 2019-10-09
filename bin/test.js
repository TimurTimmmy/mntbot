module.exports.readFile = function(){
    const readfile = require("fs");
    return readfile.readFileSync(".\\bin\\1.txt", "utf8");
};