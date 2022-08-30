import generateRandomNumbers from "../generateRandomNumbers.js";

const VALUE_DEFAULT_LENGTH = 10000;

let length = process.argv.find(arg => !isNaN(parseFloat(arg)))
length = length ? parseFloat(length) : VALUE_DEFAULT_LENGTH;

if (length > 20000) {
    console.warn("I don't recomend to use more than 20000 length because it takes a lot of time");
    process.exit();
}

const p = length / 100;
const s = Array.from({length:100}, () => 0);
for(let i = 0; i < length; i++) {
    const m = generateRandomNumbers(length);
    for(let j = 0; j < length; j++) {
        const si = Math.floor(100 / length * j);
        s[si] += m[j] / length;
    }
    process.stdout.write('\r\x1b[K' + i);
}
process.stdout.write('\r\x1b[K');
process.stdout.write(s
    .map(n => Math.abs(n / length / p - 0.5).toFixed(10))
    .join('\n')
);