/**
172. 阶乘后的零
给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:
输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。

示例 2:
输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
 */

 
/**
 * 解题思路：找规律，0 是如何生成的，0 的个数可以由谁来决定
 * 解题步骤：
 * 循环判断每个数被5整除的次数，5 的个数即阶乘后0 的个数
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var res = 0
    for(var i = 1;i<=n;i++){
        var j = i
        while(j % 5 === 0){
            res ++
            j = j / 5
        }
    }
    return res
};