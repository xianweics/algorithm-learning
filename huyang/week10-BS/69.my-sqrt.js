// x的平方根
// 实现 int sqrt(int x) 函数。
// 计算并返回 x 的平方根，其中 x 是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
// 时间复杂度：logn
// 空间复杂度：1
var mySqrt = function(x) {
    if(x == 0)  return 0;
    if(x < 4)   return 1;
    let i = 2;
    while(i*i <= x){
        if(i*i == x) return i;
        i++;
    }
    return i-1;
};