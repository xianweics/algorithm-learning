// 爬楼梯
// 动态规划
// 1	1
// 2	2
// 3	3 = 1 + 2
// 4	5 = 2 + 3
// 5	8 = 3 + 5
// 方法一：用数组保存每一步的结果
// 时间复杂度：n
// 空间复杂度：n
var climbStairs = function(n) {
    let tmp = [];
    if(n == 1){
        return 1;
    } else if(n == 2){
        return 2;
    } else{
        tmp[0] = 1;
        tmp[1] = 2;
        for(let i=2; i <= n; i++){
            tmp[i] = tmp[i-1] + tmp[i-2];
        }
    }
    return tmp[n-1];
};
// 方法一：用变量保存前两步的结果
// 时间复杂度：n
// 空间复杂度：1
var climbStairs = function(n) {
    if(n == 1){
        return 1;
    } else if(n == 2){
        return 2;
    } else{
        let a = 1;
        let b = 2;
        let res = 0;
        for(let i=3; i <= n; i++){
            res = a + b;
            a = b;
            b = res;
        }
        return res;
    }
};