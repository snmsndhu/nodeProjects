const os = require("os");

// info about current user.

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds, with different type of approach.

console.log(`System uptime per seconds is ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
