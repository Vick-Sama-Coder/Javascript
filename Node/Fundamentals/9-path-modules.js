const path = require('node:path')

//machine path separator
console.log(path.sep)
 
//Joining Path
const joinedpPath = path.join('content', 'subfolder', 'test.txt')
console.log(joinedpPath)

//basepath
const base = path.basename(joinedpPath)
console.log(base)

const absolute = path.resolve(__dirname, joinedpPath)
console.log(absolute)