// 全排列
// 给定一个可包含重复数字的序列，返回所有不重复的全排列。
// 时间复杂度：n*n
// 空间复杂度：n
var pailie = function(arr, tmp, res, set){
    let len = set.size;
    if(arr.length == 0){
        set.add(tmp.join('/'));
        if(set.size > len)    res.push(tmp);
    }
    for(let i=0; i<arr.length; i++){
        let newArr = [...arr];
        newArr.splice(i, 1);
        pailie(newArr, [...tmp, arr[i]], res, set);
    }
};
var permuteUnique = function(nums) {
    let res = [];
    let set = new Set();
    pailie(nums, [], res, set);
    return res;
};