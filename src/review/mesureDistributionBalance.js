import generateRandomNumbers from "../generateRandomNumbers.js";

const VALUE_DEFAULT_LENGTH = 100;

let length = process.argv.find(arg => !isNaN(parseFloat(arg)))
length = length ? parseFloat(length) : VALUE_DEFAULT_LENGTH;

const m = new Array(length);
for(let i = 0; i < length; i++) {
    m[i] = generateRandomNumbers(length);
}

const s = new Array(length)
for(let i = 0; i < length; i++) {
    s[i] = 0;
    for(let j = 0; j < length; j++) {
        s[i] += m[j][i];
    }
    console.log(s[i] / length);
}