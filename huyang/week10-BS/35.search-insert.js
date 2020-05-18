// 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// 时间复杂度：logn
// 空间复杂度：1
var searchInsert = function(nums, target, offset = 0) {
    if(nums.length == 1){
        if(nums[0] < target){
            return offset+1;
        } else if(nums[0] > target){
            return 0;
        } else{
            return offset;
        }
    }
    let mid = parseInt(nums.length/2);
    if(nums[mid] === target) {
        return offset + mid;
    } else if(target > nums[mid]) {
        return searchInsert(nums.slice(mid), target, offset + mid);
    } else {
        return searchInsert(nums.slice(0, mid), target, offset);
    }
};