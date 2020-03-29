/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.array = [nums[0]];
  for (let i = 1, len = nums.length; i < len; i++) {
    this.array.push(nums[i] + this.array[i-1]);
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return (i === 0) ? this.array[j] : (this.array[j] - this.array[i-1]);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */



/** 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
 *  sumRange(0, 2) -> 1
    sumRange(2, 5) -> -1
    sumRange(0, 5) -> -3
 */

console.log('val', )
//空间复杂度：O(2^n)
