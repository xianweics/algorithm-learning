/**
415. 字符串相加
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

 

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 */

/**
 * 解题思路：根据加法计算的方法， 末尾相加，溢出（大于10）进为加1
 * 解题步骤：
 * 1.初始化结果和为'',创建两个指针索引 m 和 n，指向两个整数字符串末尾，并创建当前进位值，默认为0（首次没有进位值，所以默认值为0）
 * 2.从末尾开始，将末尾字符值转为整形相加，并加上进位值，即得到和add
 * 3.add溢出，进位，当前进位值更新为1，当前位置数值为 add%10 或者 add - 10
 * 4.add未溢出，则不进位，当前进位值更新为0，当前位置值为add
 * 5.m n 指针向左移动
 * 6.直至两个数值依次相加结束，此时需要额外注意最后的进位值，如果最后的进位值为1，需要在结果数值字符串首位加1
 * 7.相加结束，返回结果值
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var res = '',carry = 0  //初始化和，及当前进位
    var m = num1.length - 1,n = num2.length - 1 //创建两个指针索引 m 和 n，指向两个整数字符串末尾
    while(m >= 0 || n >= 0){
        var x = num1[m]?num1[m]-'0':0  //字符转数值，注意判断当前位置是否有字符
        var y = num2[n]?num2[n]-'0':0  //字符转数值，注意判断当前位置是否有字符
        var add = x+y+carry  //计算和
        var numChar = add%10 //计算当前位置相加值
        carry = Math.floor(add/10)   //计算进位值
        res = numChar + res //添加和字符
        //指针移动
        m-- 
        n--
    }
    //如果进位为1，首位添加进位1
    if(carry === 1) res = carry + res
    return res
};