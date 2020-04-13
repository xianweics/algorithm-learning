/**
 * 执行用时：88 ms
 * 内存消耗：35.7 MB
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();
  const Max_Int=Math.pow(2,31)-1;
  const Min_Int=Math.pow(-2,31);
  
  let strTmp =parseInt(str,10);
  
  //字符串+数字   
  if(isNaN(strTmp)){
      return 0;
  } else {
      if(strTmp >Max_Int){
        return Max_Int;
      } else if(strTmp <Min_Int){
        return Min_Int;
      }else{
        return strTmp;
      }
  }  
};
