/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numObj = {}

    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i]

        if (comp in numObj) {
            return [numObj[comp], i]
        }
        numObj[nums[i]] = i
    }
    return []
};