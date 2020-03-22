/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  //取得nums1的前m项
  nums1.splice(m);
  //取得nums2的前n项
  nums2.splice(n);
  //将nums2合并到nums1中
  nums1.push(...nums2);
  //升序排序
  nums1.sort((a,b) => a - b);
};