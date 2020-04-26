// H指数
// 时间复杂度：nlogn
// 空间复杂度：1
// sort() 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。
// 要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
// 解题思路：对数组进行升序排序，大于元素citations[i]的元素个数即为citations.length - i个
var hIndex = function(citations) {
    if(citations.length == 0)   return 0;
    citations.sort((a,b) =>{
        return a-b;     // 升序
    });
    let h = Math.min(citations[0], citations.length);
    for(let i=1; i < citations.length; i++){
        h = Math.max(h, Math.min(citations[i], citations.length - i));
    }
    return h;
};
hIndex([6,6,4,8,4,3,3,10]);