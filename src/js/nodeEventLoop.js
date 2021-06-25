// test.js   node 10
const fs = require('fs');

console.log('mainline: start')
process.nextTick(() => {
  console.log('mainline: ', 'process.nextTick\n')
})

let counter = 0;
const interval = setInterval(() => {
 console.log('timers: setInterval.start ', counter)
 if(counter < 2) {
   setTimeout(() => {
     console.log('timers: setInterval.setTimeout')
     process.nextTick(() => {
       console.log('timers microtasks: ', 'setInterval.setTimeout.process.nextTick\n')
     })
   }, 0)

   fs.readdir('./', (err, files) => {
     console.log('poll: setInterval.readdir1')
     process.nextTick(() => {
       console.log('poll microtasks: ', 'setInterval.readdir1.process.nextTick')
       process.nextTick(() => {
         console.log('poll microtasks: ', 'setInterval.readdir1.process.nextTick.process.nextTick')
       })
     })
   })

   fs.readdir('./', (err, files) => {
     console.log('poll: setInterval.readdir2')
     process.nextTick(() => {
       console.log('poll microtasks: ', 'setInterval.readdir2.process.nextTick')
       process.nextTick(() => {
         console.log('poll microtasks: ', 'setInterval.readdir2.process.nextTick.process.nextTick\n')
       })
     })
   })

   setImmediate(() => {
     console.log('check: setInterval.setImmediate1')
     process.nextTick(() => {
       console.log('check microtasks: ', 'setInterval.setImmediate1.process.nextTick')
     })
   })

   setImmediate(() => {
     console.log('check: setInterval.setImmediate2')
     process.nextTick(() => {
       console.log('check microtasks: ', 'setInterval.setImmediate2.process.nextTick\n')
     })
   })
 } else {
   console.log('timers: setInterval.clearInterval')
   clearInterval(interval)
 }

 console.log('timers: setInterval.end ', counter)
 counter++;
}, 0);

console.log('mainline: end')

// mainline: start
// mainline: end
// mainline:  process.nextTick

// timers: setInterval.start  0
// timers: setInterval.end  0
// check: setInterval.setImmediate1
// check: setInterval.setImmediate2
// check microtasks:  setInterval.setImmediate1.process.nextTick
// check microtasks:  setInterval.setImmediate2.process.nextTick

// timers: setInterval.setTimeout
// timers: setInterval.start  1
// timers: setInterval.end  1
// timers microtasks:  setInterval.setTimeout.process.nextTick

// poll: setInterval.readdir1
// poll microtasks:  setInterval.readdir1.process.nextTick
// poll microtasks:  setInterval.readdir1.process.nextTick.process.nextTick
// poll: setInterval.readdir2
// poll microtasks:  setInterval.readdir2.process.nextTick
// poll microtasks:  setInterval.readdir2.process.nextTick.process.nextTick

// poll: setInterval.readdir1
// poll microtasks:  setInterval.readdir1.process.nextTick
// poll microtasks:  setInterval.readdir1.process.nextTick.process.nextTick
// poll: setInterval.readdir2
// poll microtasks:  setInterval.readdir2.process.nextTick
// poll microtasks:  setInterval.readdir2.process.nextTick.process.nextTick

// check: setInterval.setImmediate1
// check: setInterval.setImmediate2
// check microtasks:  setInterval.setImmediate1.process.nextTick
// check microtasks:  setInterval.setImmediate2.process.nextTick

// timers: setInterval.setTimeout
// timers: setInterval.start  2
// timers: setInterval.clearInterval
// timers: setInterval.end  2
// timers microtasks:  setInterval.setTimeout.process.nextTick