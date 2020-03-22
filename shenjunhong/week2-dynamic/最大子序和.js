/**
 * @param {number[]} nums
 * @return {number}
 */
//解题思路 nums[0] 应该要比nums[1]小 才算增加总数，所以我们遇到小的 可以替换掉
//最为最大量比较

var maxSubArray = function(nums) {
  var max = -Number.MAX_VALUE;
  var sum = 0;
  for (let num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    max = Math.max(max, sum);
  }
  return max;
};

var val = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

console.log('val: ', val);

//时间复杂度为O(n)