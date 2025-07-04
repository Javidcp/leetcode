/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let answer = 0
    let ans = []
    for (let x of nums) {
        answer += x
        ans.push(answer)
    }
    return ans
};