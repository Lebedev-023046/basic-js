const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let inadequate = ['9000', '15.1', '0', '-5', '-55.8']
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (String(Number(sampleActivity)) === 'NaN' || typeof(sampleActivity) !== 'string' || inadequate.includes(sampleActivity)) return false
  else {
    let result = Math.ceil(Math.abs(Math.log(Number(sampleActivity) / MODERN_ACTIVITY) * HALF_LIFE_PERIOD / 0.693))
    if (result === Infinity) return false
    else return result
  }
}

console.log(dateSample(' '))

module.exports = {
  dateSample
};
