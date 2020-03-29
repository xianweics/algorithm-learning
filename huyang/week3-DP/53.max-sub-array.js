// 最大子序和
// 时间复杂度：n
// 空间复杂度：1
var maxSubArray = function(nums) {
    for(let i=1; i < nums.length; i++){
        nums[i] = nums[i] + Math.max(nums[i-1], 0);
    }
    return Math.max(...nums);
};