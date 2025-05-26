/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = arr.map((acc, cur) => fn(acc, cur))

    return newArray
};