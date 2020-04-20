// 电话号码的字母组合
// 时间复杂度：n*n
// 空间复杂度：n*n
// 先把每个数字的字母组合数组放入结果数组中
// 然后递归合并结果数组，直至结果数组的长度为1
var merge = function(arr) {
    if(arr.length == 1) return arr;
    let tmp = [];
    for(let i in arr[0]){
        for(let j in arr[1]){
            tmp.push(arr[0][i] + arr[1][j]);
        }
    }
    arr.splice(0, 2, tmp);
    merge(arr);
};
var letterCombinations = function(digits) {
    if(!digits) return [];
    let arr = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    let res = [];
    if(digits.length == 1){
        return arr[parseInt(digits) - 2];
    } else{
        for(let i in digits.split('')){
            res.push(arr[digits.split('')[i] - 2]);
        }
        merge(res);
    }
    return res[0];
};