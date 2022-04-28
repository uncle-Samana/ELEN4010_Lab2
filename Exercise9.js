'use strict'

const nums = [76, 55.7, 89, 37.5]
console.log(nums.indexOf(89))
console.log(nums.indexOf(55))

const students = [
    {
        name: 'Kwezi',
        studentNumber: 453528,
        yearOfStudy: 4
    },
    {
        name: 'Pieter',
        studentNumber: 454345,
        yearOfStudy: 3
    },
    {
        name: 'Jade',
        studentNumber: 678343,
        yearOfStudy: 4
    },
    {
        name: 'Kiren',
        studentNumber: 567893,
        yearOfStudy: 4
    }
]

//console.log(electives.findIndex(function (element) {
//    return element.courseCode === 'ELEN4001' &&
//     element.yearOffered === 4
//}))

const deleteStudent = function (tobedeleted, studentArr){

    const i = studentArr.findIndex(function (element) {
        element.name === tobedeleted.name &&
        element.studentNumber === tobedeleted.studentNumber &&
        element.yearOfStudy === tobedeleted.yearOfStudy
    

    })
    studentArr.splice(i, 1)

    return studentArr
}

const modifiedArray = deleteStudent({
    name: 'Kiren',
    studentNumber: 56793, 
    yearOfStudy: 4
}, students)

console.log(modifiedArray)