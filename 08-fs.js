const { readFileSync, writeFileSync } = require('fs');


const data1 = readFileSync('./content/Nigeria.txt', 'utf-8');
const data2 = writeFileSync('./content/India.txt', 'INDIA IS A FAST GROWING COUNTRY IN THE 21ST CENTURY', 'utf-8');

console.log(data1);
console.log(data2);