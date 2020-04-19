// 最长公共前缀
// 时间复杂度n*n
// 空间复杂度n*n
// 把数组的每个字符串元素拆分成数组，并找到最短的元素的长度
// 然后依次比较字符串数组的子数组的第i位是否相同（i小于等于最短的元素的长度），相同则给公共长度加1，否则结束，返回结果
var longestCommonPrefix = function(strs) {
    if(strs.length == 0)    return "";
    let minLen = null;     // 最小元素的长度
    let num = 0;           // 公共长度
    for(let i in strs){
        strs[i] = strs[i].split("");
        minLen = !minLen ? strs[i].length : strs[i].length < minLen ? strs[i].length : minLen;
    }
    for(let i = 0; i < minLen; i++){
        let count = 0;
        let breakFlag = false;
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] == strs[0][i]){
                count++;
            } else{
                breakFlag = true;   // 出现非公共的位，结束
            }
        }
        if(breakFlag) break;
        if(count == strs.length-1){
            num++;
        }
    }
    return strs[0].slice(0, num).join("");
};