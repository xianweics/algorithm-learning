/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var len =strs.length;
  var fir = strs[0];
  var str = ''
  if(len <= 0) {
    return ""
  }
  for(var i = 0; i < fir.length ; i++){
    for (var j =  1; j < strs.length; j++) {
      if(fir[i] != strs[j][i]){
          return str;
      }
    }
    str += fir[i]
  }
  return str
};

var val = ["flower","flow","flight"];

/* 
var val = ["dog","racecar","car"]; */


console.log('val: ', longestCommonPrefix(val));

//时间复杂度O(2^n)
