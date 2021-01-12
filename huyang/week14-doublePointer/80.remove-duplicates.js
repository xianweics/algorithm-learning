// 删除排序数组中的重复项 II
// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 时间复杂度：n
// 空间复杂度：1
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let j = 2;
    for(let i=2; i<nums.length; i++){
        if(nums[i] != nums[j - 2])  nums[j++] = nums[i];
    }
    return j;
};