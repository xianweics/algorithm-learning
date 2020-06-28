// 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 时间复杂度：n
// 空间复杂度：n
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