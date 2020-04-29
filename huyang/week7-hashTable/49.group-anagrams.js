// 字母异位词分组
// 时间复杂度：n*n
// 空间复杂度：n*n
// 用质数表示26个字母，把字符串的各个字母相乘，这样可保证字母异位词的乘积必定是相等的。
var isPrimes = function(num) {
    if(num < 2) {
        return false;
    } else if(num == 2) {
        return true;
    } else if(num % 2 == 0) {
        return false;
    }
    let sq = Math.sqrt(num);    // 平方根
    for(let i=3; i <= sq; i += 2){
        if(num % i == 0) {
            return false;
        }
    }
    return true;
};
var groupAnagrams = function(strs) {
    if(strs.length == 0)    return [];
    if(strs.length == 1)    return [strs];
    let map = new Map();
    let map2 = new Map();
    let letter = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=1, j=0; i < 102; i++){
        if(isPrimes(i)){
            map.set(letter.charAt(j), i);
            j++;
        }
    }
    for(let m in strs){
        let k = 1;
        for(let n in strs[m].split('')){
            k *= map.get(strs[m].split('')[n]);
        }
        if(map2.has(k)){
            let tmp = map2.get(k);
            tmp.push(strs[m]);
            map2.set(k, tmp);
        } else{
            map2.set(k, [strs[m]]);
        }
    }
    return [...map2.values()];
};