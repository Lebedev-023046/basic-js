const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 * 
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let variants = []
  let strN = n.toString()
  let arrN = Array.from(strN)
  for (i=0;i<strN.length;i++) {
    let arrN2 = arrN.slice()
    arrN2.splice(i, 1)
    variants.push(Number(arrN2.join('')))
  }

  return Math.max(...variants)
}

console.log(deleteDigit(1001))

module.exports = {
  deleteDigit
};
