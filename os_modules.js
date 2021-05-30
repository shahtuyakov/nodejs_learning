
const os = require('os')

// info about cur user 
const user = os.userInfo();
console.log(user);

// method return the system uptime in sec
console.log(`The system uptime is ${os.uptime()} second`);

// object of os methods
const curOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(curOs);

/////////////////////////////////////////




