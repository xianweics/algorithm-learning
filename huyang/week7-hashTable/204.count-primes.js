// 计算质数
// 时间复杂度：nlogn
// 空间复杂度：1
// 依次判断小于n的数是否是质数，是则结果加1
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
var countPrimes = function(n) {
    if(n < 2)   return 0;
    let res = 0;
    for(let i=1; i < n; i++){
        if(isPrimes(i)) res++;
    }
    return res;
};
