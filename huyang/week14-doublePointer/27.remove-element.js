// 移除元素
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
// 时间复杂度：n
// 空间复杂度：1
var removeElement = function(nums, val) {
    if(nums.length < 1) return 0;
    if(nums.length == 1){
        return nums[0] == val ? 0 : 1;
    }
    let i = 0;
    for(let j=0; j < nums.length; j++){
        if(nums[j] != val){
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};