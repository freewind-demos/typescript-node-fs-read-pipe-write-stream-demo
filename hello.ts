import fs from 'fs';

const readStream = fs.createReadStream('./package.json');
const writeStream = fs.createWriteStream('./package2.json');

readStream.pipe(writeStream);

console.log('done')
