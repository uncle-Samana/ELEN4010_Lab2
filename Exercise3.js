'use strict'

let a = 'hello'
console.log(`a = ${a}, "a" is ${typeof a}`)

a = 5
a += 2
console.log(`a = ${a}, "a" is ${typeof a}`)

a = true
console.log(`a = ${a}, "a" is ${typeof a}`)

const add = function (a, b) {
  return a + b
}

const result = add(2, 3)
console.log(result)

const anotherAdd = add
console.log(anotherAdd(12, 4))
