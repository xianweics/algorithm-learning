// 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 如果k是数组长度的整数倍，则直接返回数组
// 否则k求余nums.length，然后把nums.length - k前面的元素依次移到数组后面
var rotate = function(nums, k) {
    k = k%nums.length;
    if(k == 0)  return nums;
    for(let i = 0; i< nums.length - k; i++){
        nums.push(nums.shift());
    }
};