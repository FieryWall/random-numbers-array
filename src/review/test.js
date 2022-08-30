import generateRandomNumbers from '../generateRandomNumbers.js';

const VALUE_DEFAULT_LENGTH = 100;

let length = process.argv.find(arg => !isNaN(parseFloat(arg)))
length = length ? parseFloat(length) : VALUE_DEFAULT_LENGTH;

const nums = generateRandomNumbers(length);
const hash = new Set();
if(
    typeof nums !== 'object' ||
    typeof nums.length !== 'number' ||
    nums.length !== length ||
    typeof nums.find !== 'function' ||
    nums.find(n => 
        !Number.isInteger(n) ||
        n < 0 || n >= length ||
        hash.has(n) || (hash.add(n) && false)
    )
) {
    console.error("Result: INVALID");
} else {
    console.log("Result: VALID");
}