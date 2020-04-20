// 括号的生成
// 时间复杂度：n
// 空间复杂度：n
// 回溯法：1、选择，2、条件，3、结束
var parenthesis = function(s, res, l, r) {
    if(l==0 && r==0)    res.push(s);
    if(l>0) parenthesis(s+'(', res, l-1, r);
    if(r>l) parenthesis(s+')', res, l, r-1);
};
var generateParenthesis = function(n) {
    let res = [];
    parenthesis('', res, n, n);
    return res;
};