/**
 * 内存消耗：47MB
 * 执行时间：164ms
 * 时间复杂度：O(n/2)
 * 空间复杂度：O(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const len = s.length;
  let left = s[0];
  let right = s[len-1];
  for(let i=0;i<Math.ceil(len/2);i++){
      left = s[i];
      right = s[len-i-1];
      s[i] = right;
      s[len-i-1] = left;
  }
  return s;

};
