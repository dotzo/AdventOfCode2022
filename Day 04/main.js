console.time('Run Time');
// File import stuff //
const fs = require('fs');
const {join} = require('path');

const filepath = './input.txt';
const file = fs.readFileSync(join(__dirname, filepath)).toString('utf8');
console.log('filename:', filepath);

// Parsing the input file //
const parsed = file.trim().split('\n').map(x => x.split(','));


// Code for solution starts here //
function getEndpoints(left,right) {
    return {firstL: Number(left.split('-')[0]),
        firstR: Number(left.split('-')[1]),
        secondL: Number(right.split('-')[0]),
        secondR: Number(right.split('-')[1])}
}

function solution1(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let bounds = getEndpoints(...arr[i])
        if ((bounds.firstL <= bounds.secondL && bounds.firstR >= bounds.secondR) ||
            (bounds.secondL <= bounds.firstL && bounds.secondR >= bounds.firstR)) {
                count++;
            }
    }
    return count;
}

function solution2(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let bounds = getEndpoints(...arr[i])
        if ((bounds.firstR < bounds.secondL) || (bounds.secondR < bounds.firstL)) {
            continue;
        
        } else {
            count++;
        }
    }
    return count;
}


// Output
console.log('Part 1 =',solution1(parsed));
console.log('Part 2 =',solution2(parsed));

console.timeEnd('Run Time');
