/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length

    const eSum = (n * (n + 1)) / 2
    const aSum = nums.reduce((sum, num) => sum + num, 0)

    return eSum - aSum
};