// 同构字符串
// 时间复杂度：n
// 空间复杂度：n
// 解题思路：map
var isIsomorphic = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    s = s.split('');
    t = t.split('');
    for(let i in s){
        if(map1.get(s[i])){
            if(map1.get(s[i]) != t[i])   return false;
        } else{
            map1.set(s[i], t[i]);
        }
    }
    for(let i in t){
        if(map2.get(t[i])){
            if(map2.get(t[i]) != s[i])   return false;
        } else{
            map2.set(t[i], s[i]);
        }
    }
    return true;
};