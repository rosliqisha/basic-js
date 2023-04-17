const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const getCleanArray = arr.filter(clean => clean !== -1).sort((p, p2) => p - p2);
  let i = 0;

  return arr.map(dirt => dirt === -1 ? dirt : getCleanArray[i++]);
}

module.exports = {
  sortByHeight
};
