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
function solution1(arr) {
    // A + X = Rock = 1, B + Y = Paper = 2, C + Z = Scissors = 3
    // Lose = 0, Draw = 3, Win = 6
    const scores = {
        "A X": 1 + 3,
        "A Y": 2 + 6,
        "A Z": 3 + 0,
        "B X": 1 + 0,
        "B Y": 2 + 3,
        "B Z": 3 + 6,
        "C X": 1 + 6,
        "C Y": 2 + 0,
        "C Z": 3 + 3
    }
    return arr.map(x => scores[x]).reduce((a,n) => a + n);
}

function solution2(arr) {
    // A = Rock = 1, B = Paper = 2, C = Scissors = 3
    // X = Lose = 0, Y = Draw = 3, Z = Win = 6
    const scores = {
        "A X": 3 + 0,
        "A Y": 1 + 3,
        "A Z": 2 + 6,
        "B X": 1 + 0,
        "B Y": 2 + 3,
        "B Z": 3 + 6,
        "C X": 2 + 0,
        "C Y": 3 + 3,
        "C Z": 1 + 6
    }
    return arr.map(x => scores[x]).reduce((a,n) => a + n);
}


// Output
console.log('Part 1 =',solution1(parsed));
console.log('Part 2 =',solution2(parsed));

console.timeEnd('Run Time');
