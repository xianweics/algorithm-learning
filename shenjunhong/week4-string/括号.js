/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  //回溯算法实际上一个类似枚举的搜索尝试过程，
    //当n =1 ();
      //n = 2 (())  ()()
      // n = 3  "((()))",
      //        "(()())",
      //        "(())()",
      //        "()(())",
      //        "()()()"

    var result = [];
    dfs(n, n, '', result);  // 一开始左右括号的数量都为n
    return result;
}


//这是一道动态规划的方法吧
//求n 等于 n-1
var dfs = function( left,  right, str, result){
  if(left > right){
    return
  }

  if(left === 0  && right ===0){
    result.push(str)
  } else {
    if(left > 0) dfs(left - 1, right, str + '(', result);
    if(right > 0) dfs(left, right - 1, str+')', result)
  }
};
console.log( generateParenthesis(3))


 generateParenthesis= function(n) {
  var  res = [];
  helper("",res,n,0,0);
  return res;
}

var helper = function( cur, res,  n,  left,  right){
  //因为right是右括号，数量=n 表明此时已经找到一个结果
  if (right == n){
    res.push(cur);
  }
  //可以添加一个左括号
  if (left < n){
    helper(cur+'(',res,n,left+1,right);
  }
  //添加一个右括号
  if (right < left){
    helper(cur+')',res,n,left,right+1);
  }
}