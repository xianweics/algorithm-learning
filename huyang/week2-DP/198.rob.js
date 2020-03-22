// 打家劫舍
// 时间复杂度：n
// 空间复杂度：n
var rob = function(nums) {
    if(nums.length == 0)    return 0;
    if(nums.length == 1)    return nums[0];
    if(nums.length == 2)    return Math.max(nums[0], nums[1]);
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    for(let i=2; i<nums.length; i++){
        dp[i]=Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length-1];
};