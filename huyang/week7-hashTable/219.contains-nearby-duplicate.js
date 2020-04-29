// 存在重复元素II
// 时间复杂度：n*n
// 空间复杂度：1
var containsNearbyDuplicate = function(nums, k) {
    for(let i=1; i<=k; i++){
        for(let j=0; j+i < nums.length; j++){
            if(nums[j] == nums[j+i])    return true;
        }
    }
    return false;
};