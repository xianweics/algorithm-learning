// 删除最外层的括号
// 时间复杂度：n
// 空间复杂度：n
// 输入："(()())(())(()(()))"
// 输出："()()()()(())"
// 解释：
// 输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
// 删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
var removeOuterParentheses = function(S) {
    let stack = [];
    let res = '';
    for(let i = 0; i < S.length; i++){
        if(S[i] == ')') stack.pop();
        if(stack.length > 0)   res += S[i];
        if(S[i] == '(') stack.push('(');
    }
    return res;
};