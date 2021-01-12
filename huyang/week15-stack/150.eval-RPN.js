// 逆波兰表达式求值
// 根据 逆波兰表示法，求表达式的值。
// 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
// 说明：
// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
// 时间复杂度：n*n
// 空间复杂度：1
var evalRPN = function(tokens) {
    let i = 1;
    while(i<tokens.length){
        switch(tokens[i]){
            case '+':
                tokens.splice(i-2, 3, parseInt(tokens[i-2]) + parseInt(tokens[i-1]));
                i=1;
                break;
            case '-':
                tokens.splice(i-2, 3, parseInt(tokens[i-2]) - parseInt(tokens[i-1]));
                i=1;
                break;
            case '*':
                tokens.splice(i-2, 3, parseInt(tokens[i-2]) * parseInt(tokens[i-1]));
                i=1;
                break;
            case '/':
                tokens.splice(i-2, 3, parseInt(tokens[i-2]) / parseInt(tokens[i-1]));
                i=1;
                break;
            default:
                i++;
                break;
        }
    }
    return parseInt(tokens[0]);
};