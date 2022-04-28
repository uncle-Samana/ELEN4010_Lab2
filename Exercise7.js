'use strict'
 let mixed = ['hello', 5.5, 7, false]
 let numbers = [76, 55.7, 89, 37.5, 61]
 numbers.push(19) //adds 19 to the end of the array
 numbers.unshift(61) //adds 61 at the beginning of the array
 numbers[1] = 12 //replaces element at index 1 by 12 
 numbers.splice(3, 1, 99) //replace items by 99 at index 3

 console.log(numbers) //prints the numbers array as [61, 12, 55.7, 99, 37.5, 61, 19]
 console.log(numbers[7]) //prints the 8th element of the array undefined

