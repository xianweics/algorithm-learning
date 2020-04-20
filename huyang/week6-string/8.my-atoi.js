// 字符串转换整数（atoi）
// 时间复杂度：n
// 空间复杂度：n
// 遍历一次把整数和符号存下来，不符合条件时退出循环
var myAtoi = function(str) {
    let min = -1024*1024*2048;
    let max = -min-1;
    if(!/\d+/.test(str)) return 0;      // 字符串中不存在整数时直接返回0
    let arr = str.replace(/^\s*|\s*$/g, '').split('');  // 删除字符串前空白的字符
    // let arr = str.split('');
    let brr = [];
    let p = null;
    let res = 0;
    for(let i in arr){
        if(arr[i] != ' '){
            if(/^[0-9]*$/.test(arr[i])){
                if(!p)  p = '+';
                brr.push(arr[i]);
            } else{
                if(arr[i] == '+' || arr[i] == '-'){
                    if(!p){
                        p = arr[i];
                    } else{
                        break;
                    }
                } else{
                    break;
                }
            }
        } else{
            if(brr.length > 0 || p){
                break;
            }
        }
    }
    if(brr.length > 0){
        res = p == '-' ? -brr.join('') : brr.join('');
    } else{
        return res;
    }
    if(res >= max){
        return max;
    } else if(res <= min){
        return min;
    } else{
        return res;
    }
};