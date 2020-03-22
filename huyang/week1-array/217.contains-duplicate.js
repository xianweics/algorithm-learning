// 存在重复元素
// 给定一个整数数组，判断是否存在重复元素。
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
// 方法一：
// 时间复杂度：n
// 空间复杂度：n
// 遍历数组，用数组元素作为临时数组tmp的下标，如果tmp某下标已有元素则为重复，返回true。
var containsDuplicate = function(nums) {
    let tmp = [];
    for(let i = 0; i < nums.length; i++){
        if(tmp[nums[i]])  return true;
        tmp[nums[i]] = 1;
    }
    return false;
};

// 方法二：
// 时间复杂度：n*n
// 空间复杂度：1
// 两次遍历比较
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j])  return true;
        }
    }
    return false;
};