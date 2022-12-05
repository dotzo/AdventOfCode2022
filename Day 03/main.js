console.time('Run Time');
// File import stuff //
const fs = require('fs');
const {join} = require('path');

const filepath = './input.txt';
const file = fs.readFileSync(join(__dirname, filepath)).toString('utf8');
console.log('filename:', filepath);

// Parsing the input file //
const parsed = file.trim().split('\n');

// Code for solution starts here //
function intersect(a,b) {
    return [...a].filter(c => [...b].indexOf(c) !== -1)
}

function findRepeat(str) {
    let half = str.length / 2;
    return intersect(str.slice(0,half), str.slice(half))[0]
}

function calcPriority(char) {
    const lower = 'a'.charCodeAt(0);
    const upper = 'A'.charCodeAt(0);
    const value = char.charCodeAt(0);
    //console.log(c, c.isUpperCase, c.charCodeAt(0), upper)
    return value < lower ? value - upper + 1 + 26 : value - lower + 1;
}

function solution1(arr) {
    return arr.map(x => calcPriority(findRepeat(x))).reduce((a,n) => a + n)
}

function solution2(arr) {
    let badges = 0
    for (let i = 0; i < arr.length; i+=3) {
        badges += calcPriority( intersect(arr[i], intersect(arr[i+1],arr[i+2]))[0] )
    }
    return badges
}


// Output
console.log('Part 1 =',solution1(parsed));
console.log('Part 2 =',solution2(parsed));

console.timeEnd('Run Time');
