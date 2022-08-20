const fs = require('fs');
const path = require('path');

const URI_DEST = './out';
const FILE_NAME = 'nums.txt';

module.exports = function(nums) {
    let text = '';
    nums.forEach((n, i) => text += n + ((i + 1) % Math.floor(Math.sqrt(nums.length)) === 0 ? "\n" : ", "));
    text = text.slice(0, -2);

    if (!fs.existsSync(URI_DEST)) fs.mkdirSync(URI_DEST);
    const filePath = path.join(__dirname, '..', URI_DEST, FILE_NAME);
    if (fs.existsSync(filePath)) fs.rmSync(filePath);
    fs.writeFileSync(filePath, text, 'utf-8');
}