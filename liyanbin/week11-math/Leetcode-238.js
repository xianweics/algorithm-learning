/**
238. 除自身以外数组的乘积
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:
输入: [1,2,3,4]
输出: [24,12,8,6]
 

提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */

/**
 * 解题思路：循环数组，记录数组前面的乘积，赋给当前索引值，并将当前索引值 乘以该索引之前所有索引的乘积值
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var newNums = [1]
    var preNum = nums[0]
    for(var i = 1;i<nums.length;i++){
        var num = nums[i]
        //依次将当前值乘以前面索引的值
        for(var j = 0;j<i;j++){
            newNums[j] *= num
        }
        newNums[i] = preNum //将该索引前面的乘积赋给该索引值
        preNum *= num //记录索引前乘积
    }
    return newNums
};

/**
 * 解题思路：先从前面计算每个索引的乘积值，再从后面依次计算每个索引的索引值
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res = [1]
    //从左至右
    for(var i = 1;i<nums.length;i++){
        res[i] = res[i-1]*nums[i-1]
    }
    //从右至左
    var r_prev = 1
    for(var j = nums.length -1;j>=0;j--){
        res[j] *= r_prev
        r_prev *= nums[j]
    }
    return res
};