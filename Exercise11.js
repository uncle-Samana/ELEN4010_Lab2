'use strict'

// const sleep = function (sleepDuration){
//     const now = new Date().getTime()
//     while (new Date().getTime() < now + sleepDuration) {

//     }
// }

// console.log('Starting')

// setTimeout(() => {console.log('Done Waiting')}, 10000)

// console.log('Done, doing other things')

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log('Done with other things')
let fs = requires("fs");
fs.readFile("./ELEN4010.txt", "utfs", (err, data) => {if (err) throw err;
console.log(data)})