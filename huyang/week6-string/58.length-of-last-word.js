// 最后一个单词的长度
// 时间复杂度：n
// 空间复杂度：n
var lengthOfLastWord = function(s) {
    if(s.length == 0)   return 0;
    let arr = s.split(' ');
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] != '')    return arr[i].length;
    }
    return 0;
};