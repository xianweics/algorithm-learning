// 罗马数字转整数
// 如果前一个数字比后面小，则减去它
// 时间复杂度：n
// 空间复杂度：n
var romanToInt = function(s) {
    let arr = s.split("");
    let num = 0;
    for(let i in arr){
        switch(arr[i]){
            case "I":
                arr[i] = 1;
                break;
            case "V":
                arr[i] = 5;
                break;
            case "X":
                arr[i] = 10;
                break;
            case "L":
                arr[i] = 50;
                break;
            case "C":
                arr[i] = 100;
                break;
            case "D":
                arr[i] = 500;
                break;
            case "M":
                arr[i] = 1000;
                break;
            default:
                arr[i] = 0;
                break;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] && arr[i] < arr[i+1]){
            arr[i] = -arr[i];
        }
        num += arr[i];
    }
    return num;
};