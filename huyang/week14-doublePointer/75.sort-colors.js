// 颜色分类
// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 时间复杂度：n
// 空间复杂度：1
var sortColors = function(nums) {
    let len = nums.length;
    let a = len, b = len;
    for(let i=0; i<len; i++){
        if(nums[i] == 0){
            nums.splice(a, 0, 0);
            a++;
        } else if(nums[i] == 1){
            nums.splice(a, 0, 1);
            b++;
        } else{
            nums.splice(a+b, 0, 2);
        }
    }
    nums.splice(0, len);
    return nums;
};