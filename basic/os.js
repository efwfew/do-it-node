var os = require('os');

console.log('system hostname ' + os.hostname());
console.log('system memory info ' + os.freemem(), os.totalmem());
console.log('system cpu info');
console.dir(os.cpus());
console.log('system network info');
console.log(os.networkInterfaces());