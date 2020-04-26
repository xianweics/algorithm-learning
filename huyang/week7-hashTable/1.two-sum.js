// 两数之和
// 方法一：两层遍历
// 时间复杂度：n*n
// 空间复杂度：1
var twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target) return [i, j];
        }
    }
    return [];
};


// 方法二：使用map
// 时间复杂度：n
// 空间复杂度：n
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i < nums.length; i++){
        if(map.has(target-nums[i])) return [map.get(target-nums[i]), i];
        map.set(nums[i], i);
    }
    return [];
};