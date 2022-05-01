const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
list = ['Olivia', 1111, 'Lily', 'Oscar', true, null]
let strList = []
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  try {
    members = Array.from(members).filter(element => typeof(element) === 'string')
    let letterList = []
    members.forEach(element => {
      letterList.push(element.trim().slice(0,1).toUpperCase())
    })
    letterList = letterList.sort()
    return letterList.join('')
  }catch{
    return false
  }

  // members.forEach(element => {
  //   if (typeof(element) === 'string') strList.push(element)
  // })

}

createDreamTeam(list)

module.exports = {
  createDreamTeam
};
