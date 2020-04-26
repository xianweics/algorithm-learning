// 存在重复元素
// 时间复杂度：n
// 空间复杂度：n
// 解题思路：把给定数组元素作为临时数组下标
var containsDuplicate = function(nums) {
    let tmp = [];
    for(let i in nums){
        if(!tmp[nums[i]]){
            tmp[nums[i]] = i;
        } else{
            return true;
        }
    }
    return false;
};