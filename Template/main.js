console.time('Run Time');
// File import stuff //
const fs = require('fs');
const {join} = require('path');

const filepath = './sample.txt';
const file = fs.readFileSync(join(__dirname, filepath)).toString('utf8');
console.log('filename:', filepath);

// Parsing the input file //
const parsed = file.trim().split('\n');


// Code for solution starts here //
function solution1() {

}

function solution2() {

}


// Output
console.log('Part 1 =',solution1(parsed));
console.log('Part 2 =',solution2(parsed));

console.timeEnd('Run Time');
