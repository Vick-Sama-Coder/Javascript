const os = require('node:os')


//User Info
const user = os.userInfo()
console.log(user)



//System Uptime in seconds

console.log(os.uptime())


//System Info
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs)