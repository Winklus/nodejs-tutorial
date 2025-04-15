// the operating system (os) module is a built in node so you don't need to install it

const { log } = require('console')
const os = require('os')

// info about current user
const userInfo = os.userInfo()

console.log(userInfo)

// method return the system timeup in second

console.log(`The system time is ${os.uptime()} seconds`)


const osObj = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freSpace: os.freemem(),
}

console.log(osObj)