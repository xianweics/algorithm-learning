// Z字形变换
// 时间复杂度：n
// 空间复杂度：n*n
// 解题思路：数学规律
var convert = function(s, numRows) {
    if(s.length == 0 || numRows == 1)    return s;
    let m = 2 * numRows - 2;
    let tmp = s.split('');
    let res = '';
    for(let i=0; i<numRows; i++){
        for(let j in tmp){
            if(j%m == i || j%m == m-i)  res += tmp[j];
        }
    }
    return res;
};