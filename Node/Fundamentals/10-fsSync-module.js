const { readFileSync, writeFileSync } = require('node:fs');

console.log(readFileSync('./content/first.txt', 'utf8'))

writeFileSync('./content/written.txt', first)