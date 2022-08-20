import generateRandomNumbers from '../generateRandomNumbers.js';

const VALUE_DEFAULT_LENGTH = 100;

let length = process.argv.find(arg => !isNaN(parseFloat(arg)))
length = length ? parseFloat(length) : VALUE_DEFAULT_LENGTH;

const nums = generateRandomNumbers(length);
const hash = new Set();
if(nums.find(n => hash.has(n) || (hash.add(n) && false))) {
    console.error("Result: INVALID");
} else {
    console.log("Result: VALID");
}