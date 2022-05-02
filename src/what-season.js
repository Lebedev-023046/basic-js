const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const seasons = {
  'Jan': 'winter',
  'Feb': 'winter',
  'Mar': 'spring',
  'Apr': 'spring',
  'May': 'spring',
  'Jun': 'summer',
  'Jul': 'summer',
  'Aug': 'summer',
  'Sep': 'autumn',
  'Oct': 'autumn',
  'Nov': 'autumn',
  'Dec': 'winter',
}

function getSeason(date) {
    if (typeof(date) === 'undefined') return 'Unable to determine the time of year!'
    if (!(date instanceof Date || !date)) throw new Error('Invalid date!')
    if (Object.keys(date).length > 0) throw new Error('Invalid date!')
    return seasons[String(date).split(" ")[1]]  
}

let newDate = new Date(2020, 05, 13)
let newDate1 = new Date()
console.log(newDate1.toString())

// console.log(getSeason(2019, 10, 01))

module.exports = {
  getSeason
};
