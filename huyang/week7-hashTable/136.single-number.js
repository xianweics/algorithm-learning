// 只出现一次的数字
// 时间复杂度：n
// 空间复杂度：1
// 解题思路：异或
var singleNumber = function(nums) {
    for(let i=1; i<nums.length; i++){
        nums[0] ^=nums[i];
    }
    return nums[0];
};