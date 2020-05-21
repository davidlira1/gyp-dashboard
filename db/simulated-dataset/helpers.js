const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const randomNum = (min = 0, max) => {
    return min + Math.floor(Math.random() * ((max + 1) - min));
}

module.exports = {
    randomNum,
    fs
}