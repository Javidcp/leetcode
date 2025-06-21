/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
  let sum=0
  for(let i=0;i<nums.length;i++){
    let left=((i-k)<0)?0:nums[i-k]
    let right=((i+k)<nums.length)?nums[i+k]:0
    if(left<nums[i]&&right<nums[i]){
        sum+=nums[i]
    }
  }
  return sum
};