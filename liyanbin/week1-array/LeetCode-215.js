/**
215. 数组中的第K个最大元素
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5

示例 2:
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 */

/**
 * 第一种解题方案
 * 解题思路：将数值放到map对象中进行排序，再倒叙找到倒数第k个元素的值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var itemNums = {},backLen = 0
    for(var i = 0;i<nums.length;i++){
        var v = nums[i]
        if(itemNums[v]){
            itemNums[v] ++
        }else{
            itemNums[v] = 1
        }
    }
    var keys = Object.keys(itemNums)
    keys.sort(function(a,b){return a- b})
    for(var j = keys.length - 1;j>-1;j--){
        var key = keys[j]
        backLen += itemNums[key]
        if(backLen >= k){
            return key
        }
    }
};

/**
 * 第二种解题方案
 * 解题思路：对数组进行排序，找到倒数第k个元素的值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // if(nums.length === 1) return nums[0]
    nums = nums.sort(function(a,b){
        return a-b
    })
    for(var i = nums.length - 1;i>=0;i--){
        k --
        if(k === 0){
            return nums[i]
        }
    }
};