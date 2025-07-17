/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const fil = nums.filter(a => nums.indexOf(a) === nums.lastIndexOf(a))
    const number = parseInt(fil.join(''))
    return number
};