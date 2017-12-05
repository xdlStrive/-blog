let config = require('./config.json');

module.exports = function(){
    let greet = document.createElement('div');
    greet.textContent = "欢迎来到“源初的愿望”！";
    return greet;
};