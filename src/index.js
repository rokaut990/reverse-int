const { strikethrough } = require("colors");

module.exports = function reverse (n) {
    if (n < 0){
        n = n * (-1);
    }  
    str = n + '';
    str = str.split('').reverse().join('');
    return str;
}
