import randomNumbers from './generateRandomNumbers.js';
import writer from './writer.cjs';

const VALUE_DEFAULT_LENGTH = 10000;
const OPT_WRITE_FILE = 'f';
 
let length = process.argv.find(arg => !isNaN(parseFloat(arg)))
length = length ? parseFloat(length) : VALUE_DEFAULT_LENGTH;

console.log(`Generating ${length + (length === VALUE_DEFAULT_LENGTH ? ' (default)' : '')} array numbers`);
const nums = randomNumbers(parseFloat(length));
console.log(nums);

if (process.argv.includes(OPT_WRITE_FILE)) {
    writer(nums);
}