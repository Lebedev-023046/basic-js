const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str += ' '
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newStr = ''
  let count = 1
  for (i=0; i<str.length-1; i++) {
    let s = str[i]
    if (s === str[i+1]) {
      count++
    }else{
      if (count > 1){
        newStr += `${count}${s}`
      }else{
        newStr += `${s}`
      }

      count = 1
    }
  }
  return newStr
}

console.log(encodeLine('aaabbbccre'))

module.exports = {
  encodeLine
};
