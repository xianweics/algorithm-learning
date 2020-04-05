/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {

  if(!nums.length) return 0
  // maxMoney是上次的最大收益
  if (nums.length === 0) {
    return 0;
  }
  let maxMoney = nums[0];
  for (let i = 0 ; i<nums.length ; i++ ) {
      nums[i] = Math.max(nums[i-2] || 0, nums[i-3] || 0) + nums[i];
      if (nums[i] > maxMoney) {
          maxMoney = nums[i] 
      }
  }

  return maxMoney;

};

var val = massage([1,2,3,1]);
/* 
var val = massage( [2,7,9,3,1]); */

/* var val =  massage( [2,1,4,5,3,1,1,3]); */


console.log('val: ', val);
//空间复杂度：O(n)