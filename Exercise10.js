'use strict'

/*const squareNormal = function (num) { return num * num }

const squareShorter = (num) => {return num * num}

const sqaureShortest = num => num * num

console.log(squareNormal(2))
console.log(squareShorter(3))
console.log(sqaureShortest(4))*/

const electiveOne = {
    courseCode: 'ELEN4010',
    yearOffered: 4
}

const electiveTwo = {
    courseCode: 'ELEN4001',
    yearOffered: 4
}

const electiveThree = {
    courseCode: 'ELEN4020',
    yearOffered: 4
}

const electiveFour = {
    courseCode: 'ELEN4017',
    yearOffered: 4
}

let students = [
    {
        name: 'Khwezi',
        studentNumber: 453528,
        electives: [electiveOne, electiveTwo, electiveThree]
    },

    {
        name: 'Pieter',
        studentNumber: 454345,
        electives: [electiveOne, electiveTwo, electiveFour]
    },

    {
        name: 'Jade',
        studentNumber: 678345,
        electives: [electiveTwo, electiveThree, electiveFour]
    },

    {
        name: 'Kiren',
        studentNumber: 567893,
        electives: [electiveOne, electiveTwo, electiveThree]
    },
]

const filterbyElective = function (stdObj){
    if (stdObj.findIndex(function (elem){
        elem.electives === electiveOne
    })){
        return true
    }
    else {return false}
}
 
const getSofwareStudents = stdArr => stdArr.filter(elect => elect.electives.indexOf(electiveOne) >=0)

const SoftwareStudents = getSofwareStudents(students)
console.log(SoftwareStudents)