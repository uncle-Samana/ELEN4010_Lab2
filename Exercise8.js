'use strict'

const squareNums = function (elem)
{
    return elem * elem
}
const oldArray = [1, 4, 9, 16]

const map = function (functionToApply, array){
    let newArray = []
    array.forEach(function (element) {
        let newElem = functionToApply(element)
        newArray.push(newElem)
    });
    return newArray
}

let newArray = map(squareNums, oldArray)

console.log(newArray)