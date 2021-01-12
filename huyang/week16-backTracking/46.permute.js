// 全排列
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 时间复杂度：n*n
// 空间复杂度：n
var pailie = function(arr, tmp, set){
    if(arr.length == 0)	set.add(tmp);
    for(let i=0; i<arr.length; i++){
        let newArr = [...arr];
        newArr.splice(i, 1);
        pailie(newArr, [...tmp, arr[i]], set);
    }
};
var permute = function(nums) {
    let set = new Set();
    pailie(nums, [], set);
    return [...set];
};