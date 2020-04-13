/**
 * 执行用时：56 ms
 * 内存消耗：35 MB
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let result = -1;
//   console.log(haystack,needle);
  if (!needle){
      result = 0;
     return result;
  } else {
      const len = haystack.length;
      const needlen = needle.length;
      
      if(haystack == needle){
          result = 0;
          return result;
      }
      
      for(let i=0;i<len-needlen+1;i++){
        if(haystack.slice(i,needlen+i) == needle){
            result = i;
            return result;
        }
      }
      return result;//未找到符合条件的字符串    
  }

};
