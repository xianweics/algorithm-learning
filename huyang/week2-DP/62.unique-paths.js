// 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 排列组合：向右m-1步，向下n-1步，一共m+n-2，其中（m-1）或（n-1）步特殊，即C(m+n-2,m-1)。
var uniquePaths = function(m, n) {
    if(m == 1 || n == 1)    return 1;
    let a = m+n-2;
    let b = m > n ? n-1 : m-1;
    let p = a;
    let q = b;
    for(let i=1; i<b; i++){
        p *= a-i;
        q *= b-i;
    }
    return p/q;
};