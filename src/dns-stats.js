const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

domains1 = ['epam.com']

domains2 = ['epam.com', 'info.epam.com']

// const countElem = (elem, domList) => {
//   let count = 0
//   domList.flat().forEach(element => {
//     if (element === elem) count++
//   })
//   return count
// }

let domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
 ]

function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  let domList = []
  let domCount = {}
  domains.forEach(element => {
    domList.push(element.split(".").reverse())
  });
  for (let i=0;i<domList.length;i++) {
    for (let j=0;j<domList[i].length;j++) {
      domList[i][j] = `.${domList[i][j]}`
    }
  }

  for (let i=0;i<domList.length;i++) {

    //first level
    if (typeof(domCount[domList[i][0]]) !== 'undefined') domCount[domList[i][0]]++
    else  domCount[domList[i][0]] = 1

    //second level
    let secondLevelDmain = domList[i][0] + domList[i][1]
    if (typeof(domCount[secondLevelDmain]) !== 'undefined') domCount[secondLevelDmain]++
    else  domCount[secondLevelDmain] = 1

    //third level
    if (typeof(domList[i][2]) !== 'undefined') {
      let thirdLevelDmain = domList[i][0] + domList[i][1] + domList[i][2]
      if (typeof(domCount[thirdLevelDmain]) !== 'undefined') domCount[thirdLevelDmain]++
      else  domCount[thirdLevelDmain] = 1
    }
    }
  return domCount
}

console.log(getDNSStats(domains))

module.exports = {
  getDNSStats
};
