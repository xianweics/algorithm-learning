// 有效的括号
// 时间复杂度：n
// 空间复杂度：n
// 利用栈后进先出的思想
var isValid = function(s) {
    if(!s)  return true;
    let arr = s.split('');
    if(arr.length%2 != 0)   return false;
    let res = [];     // 栈
    for(let i in arr){
        if(arr[i] == '(' || arr[i] == '[' || arr[i] == '{'){
            res.push(arr[i]);     // 入栈
        } else{
            switch(arr[i]){
                case ')':
                    if(res[res.length-1] == '('){
                        res.pop();
                    } else{
                        return false;
                    }
                    break;
                case ']':
                    if(res[res.length-1] == '['){
                        res.pop();
                    } else{
                        return false;
                    }
                    break;
                case '}':
                    if(res[res.length-1] == '{'){
                        res.pop();
                    } else{
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    if(res.length == 0){
        return true;
    } else{
        return false;
    }
};