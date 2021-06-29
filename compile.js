const path = require('path'); // for cross file path
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'UTF-8'); // to read

const compiled = solc.compile(source, 1); // 1- number of contracts

module.exports = compiled.contracts[":Lottery"];