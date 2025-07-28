/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
        let max = 0;
    for (const num of nums) {
        max |= num;
    }

    let count = 0;
    const n = nums.length;

    for (let i = 1; i < (1 << n); i++) {
        let current = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                current |= nums[j];
            }
        }
        if (current === max) {
            count++;
        }
    }

    return count;
    
};