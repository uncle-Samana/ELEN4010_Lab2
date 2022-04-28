'use strict'

const temp_Cel = function (deg_F) {
  return ((deg_F - 32) * (5 / 9))
}

const deg_fah = 87
console.log(`The temp in degrees Fahrenheit is ${deg_fah}. In degrees Celcius, it is ${temp_Cel(deg_fah)}`)
