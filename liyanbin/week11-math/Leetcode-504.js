/**
504. 七进制数
给定一个整数，将其转化为7进制，并以字符串形式输出。

示例 1:
输入: 100
输出: "202"

示例 2:
输入: -7
输出: "-10"
 */

/**
 * 解题思路，数字不断除以7取整 ，同时取其余数
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var base7Str = ''

    //对num 不断除以7 取整，注意判断num 正负，
    if(num > 0){
        //正数则每次对num取余，并取余数
        while(num >= 7){
            var remainder = num % 7
            num = Math.floor(num / 7)
            base7Str = remainder + base7Str
        }
    }else if(num < 0){
        //正数则每次对num取余，并去余数的正数，即-remainder
        while(num <= -7){
            var remainder = num % 7
            num = Math.ceil(num / 7)
            base7Str = -remainder + base7Str
        }
    }
    return num + base7Str
};