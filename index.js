/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const mySet = new Set(items);
  const myArray = [...mySet];
  return myArray;
};

module.exports = removeDuplicateItems;
