// Pow(x, n)
// 实现 pow(x, n) ，即计算 x 的 n 次幂函数
// 时间复杂度：n
// 空间复杂度：1
var myPow = function(x, n) {
    if(n == 0)  return 1;
    if(n == 1)  return x;
    if(n == -1)  return 1/x;
    if(x == 0) return 0;
    if(x == 1) return 1.0;
    if(x == -1){
        if(Math.abs(n) % 2 == 0) {
            return 1.0;
        } else{
            return -1.0;
        }
    }
    let res = x;
    for(let i=1;i<Math.abs(n);i++){
        res *=x;
    }
    return n > 0 ? res : 1/res;
};