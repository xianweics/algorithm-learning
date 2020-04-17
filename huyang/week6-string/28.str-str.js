// 实现 strStr()
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
// 时间复杂度：1
// 空间复杂度：n
var strStr = function(haystack, needle) {
    if(haystack == needle || needle == "")  return 0;
    let res = haystack.split(needle);
    return res.length == 1 ? -1 : res[0].length;
};