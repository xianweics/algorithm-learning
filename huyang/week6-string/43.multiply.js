// 字符串相乘
// 时间复杂度：n*n
// 空间复杂度：n*n
// 	   1 2 3	  max
//   *   4 5	  min
// -------------- res
// 0 0 6 1 5	  tmp
// 0 4 9 2 0	  tmp
// --------------
// 0 5	5 3 5     res[0]
var multiply = function(num1, num2) {
    if(num1 == '0' || num2 == '0') return '0';
    if(num1 == '1') return num2;
    if(num2 == '1') return num1;
    let max = num1.length >= num2.length ? num1.split('') : num2.split('');     // 较大的数
    let min = num1.length < num2.length ? num1.split('') : num2.split('');      // 较小的数
    let len = num1.length + num2.length;    // 结果的最大长度
    let tmp = new Array(len).fill(0);       // 每一项乘积
    let res = [];                           // 存放【每一项乘积】的数组
    let p = 0;      // 进位
    let k = len-1;  // 替换的位置
    for(let i=min.length-1; i>=0; i--){
        for(let j=max.length-1; j>=0; j--){
            tmp[k] = (min[i]*max[j])%10 + p;
            p = parseInt((min[i]*max[j])/10);
            k--;
            if(j==0)    tmp[k] = p;
        }
        res.push(tmp);
        tmp = new Array(len).fill(0);   // 每一项乘积
        k = len - 1 - (min.length - i); // 替换的位置
        p = 0;                          // 进位
    }
    k = len - 1;
    for(let i=len-1; i>=0; i--){
        for(let j=1; j<res.length; j++){
            res[0][i] += res[j][i];
        }
        res[0][i] += p;
        p = parseInt(res[0][i]/10);
        res[0][i] %= 10;
        k--;
    }
    return res[0][0] == 0 ? res[0].splice(1).join('') : res[0].join('');
};