'use strict'

const student =
{
  name: 'Samana',
  studentNumber: 1256268
}

const course =
{
  courseCode: 'ELEN4010'
}

const anotherCourse =
{
  courseCode: 'ELEN3012'
}
const isYearOffered = function (theCourse) {
  if (theCourse.courseCode.includes('40')) { theCourse.yearOffered = ' is offered in Year 4' }

  if (theCourse.courseCode.includes('30')) { theCourse.yearOffered = ' is offered in Year 3' }

  if (theCourse.courseCode.includes('20')) { theCourse.yearOffered = ' is offered in Year 2' }
}

const courseInfo = function (theCourse) {
  const info = theCourse.courseCode + theCourse.yearOffered
  return info
}
const addAge = function (theStudent, age) {
  theStudent.age = age
}

const setStudentToEmpty = function (theStudent)
{
    theStudent = {}
}

addAge(student, 20)
isYearOffered(anotherCourse)
console.log(courseInfo(anotherCourse))
