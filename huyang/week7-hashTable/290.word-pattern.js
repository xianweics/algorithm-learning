// 单词规律
// 时间复杂度：n
// 空间复杂度：n
// 解题思路：map
var wordPattern = function(pattern, str) {
    str = str.split(' ');
    pattern = pattern.split('');
    if(str.length != pattern.length)    return false;
    let map1 = new Map();
    let map2 = new Map();
    for(let i in pattern){
        if(map1.get(pattern[i])){
            if(map1.get(pattern[i]) != str[i])   return false;
        } else{
            map1.set(pattern[i], str[i]);
        }
    }
    for(let i in str){
        if(map2.get(str[i])){
            if(map2.get(str[i]) != pattern[i])   return false;
        } else{
            map2.set(str[i], pattern[i]);
        }
    }
    return true;
};