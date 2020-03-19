// 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
var majorityElement = function(nums) {
    let x = Math.round(nums.length/2);
    let tmp = [];
    for(let i in nums){
        if(!tmp[nums[i]]){
            tmp[nums[i]] = 1;
        } else{
            tmp[nums[i]]++;
        }
        if(tmp[nums[i]] >= x)   return nums[i];
    }
};