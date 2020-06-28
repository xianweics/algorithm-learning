// 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 时间复杂度：n*n
// 空间复杂度：n
var merge = function (arr) {
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
var letterCombinations = function (digits) {
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