import generateRandomNumbers from "../generateRandomNumbers.js";

const VALUE_DEFAULT_LENGTH = 10000000;

function randomNumbersClassic() {
    const nums = Array(length);
    for(let i = 0; i < length; i++) {
        nums[i] = i;
    }
    for(let i = 0; i < length; i++) {
        const n = Math.floor(Math.random() * length);
        const t = nums[i];
        nums[i] = nums[n];
        nums[n] = t;
    }
    return nums;
}

let length = process.argv.find(arg => !isNaN(parseFloat(arg)))
length = length ? parseFloat(length) : VALUE_DEFAULT_LENGTH;

console.log(`Numbers count: ${length}`);

let t = Date.now();
randomNumbersClassic(length);
console.log(Date.now() - t, " - classic");

t = Date.now();
generateRandomNumbers(length);
console.log(Date.now() - t, " - experemental");