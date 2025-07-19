const os = require('os')

const arr = [
    os.arch(),
    os.release(),
    os.freemem(),
    os.totalmem(),
    os.cpus()
]

console.log(arr)