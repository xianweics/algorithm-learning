/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s === '' && t === '') return true;
  
  let ans = false,
      start = 0,
      end = s.length;
  
  for (let i = 0, len = t.length; i < len; i++) {
    if (s.charAt(start) === t.charAt(i)) {
      start++;
    }
    
    if (start === end) {
      ans = true;
      break;
    }
  }
  
  return ans;
};


s = "abc", t = "ahbgdc"
/* s = "axc", t = "ahbgdc"; */
var val = isSubsequence(s, t);
console.log('val: ', val);

/* 
s = "axc", t = "ahbgdc"
var val = isSubsequence(s, t);
console.log('val: ', val); */

//空间复杂度：O(n)