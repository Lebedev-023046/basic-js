const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 const coincidence = (arr1, arr2) => {
  for (i=0;i<arr1.length; i++) {
    if (arr2.includes(arr1[i])) return true
    else return false
  }
}


function getCommonCharacterCount(s1, s2) {
  let l1 = Array.from(s1)
  let l2 = Array.from(s2)
  let count = 0

  while (coincidence(l1, l2)) {
    l1.forEach(element => {
      if (l2.includes(element)) {
        l2.splice(l2.indexOf(element), 1)
        l1.splice(l1.indexOf(element), 1)
        count++
      }
    })
  }
  return count
}

console.log(getCommonCharacterCount('abca', 'xyzbac'))

// let l1 = Array.from('a')
// let l2 = Array.from('xyz')

// console.log(coincidence(l1, l2))

// let difference = l2.filter(x => l1.indexOf(x) === -1);
// console.log(difference)

module.exports = {
  getCommonCharacterCount
};
