// 有效的字母异位词
// 字母异位词指字母相同，但排列不同的字符串。
// 时间复杂度：nlogn
// 空间复杂度：n
var isAnagram = function(s, t) {
    if(s.length != t.length)    return false;
    return s.split('').sort().join('') == t.split('').sort().join('');
};