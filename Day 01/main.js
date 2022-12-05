console.time('Run Time');
// File import stuff //
const fs = require('fs');
const {join} = require('path');

const filepath = './input.txt';
const file = fs.readFileSync(join(__dirname, filepath)).toString('utf8');
console.log('filename:', filepath);

// Parsing the input file //
const parsed = file.split('\n\n').map(x => x.split('\n').map(Number));
//console.log(parsed);

// Code for solution starts here //
function groupBySum(arr) {
    return arr.map(x => x.reduce((acc,n) =>  acc + n))
}

function solution1(arr) {
    return Math.max(...groupBySum(arr));
}

function solution2(arr) {
    return groupBySum(arr).sort((a,b) => a - b).slice(-3).reduce((a,n) => a + n);
    //return [...new Int32Array(groupBySum(arr)).sort()].slice(-3).reduce((a,n) => a + n);
}


// Output
console.log('Part 1 =',solution1(parsed));
console.log('Part 2 =',solution2(parsed));

console.timeEnd('Run Time');
