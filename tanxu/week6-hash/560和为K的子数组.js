/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 总和 - k 出现的次数  就累加至最终结果的次数
var subarraySum = function(nums, k) {
    const map = new Map()
    map.set(0,1)
    let result = 0
    let sum = 0
    for (let i = 0 ; i < nums.length; i++) {
        sum += nums[i]
        if (map.get(sum - k)) {
            result += map.get(sum - k)
        }
        map.get(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1)
    }
    return result
};
