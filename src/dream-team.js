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
function createDreamTeam(members) {
  const isItString = string => typeof string === 'string';
  const getFirstSymbol = first => first.trim().charAt(0).toUpperCase();

  if (!Array.isArray(members)) {
    return false;
  }

  return members.filter(isItString).map(getFirstSymbol).sort().join('');
}

module.exports = {
  createDreamTeam
};
