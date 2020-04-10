/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  console.log('haystackArr: ', haystack);

  if(haystack.indexOf(needle) > -1){
    return haystack.indexOf(needle)
  } else {
    return -1
  }
};
var haystack = "hello", needle = "ll"
/* var haystack = "aaaaa", needle = "bba" */
console.log('haystack', strStr(haystack, needle));

//空间复杂度o(n)