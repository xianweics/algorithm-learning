// 直线上最多的点数
// 时间复杂度：n*n
// 空间复杂度：1
// 解题思路：斜率相同的点在同一条直线上，注意要考虑平行于x轴或平行于y轴的特殊情况，以及坐标极大且相近的精度问题
var maxPoints = function(points) {
    if(points.length < 3)   return points.length;
    let map = new Map();
    let res = 0;
    let x = 1;
    let y = 1;
    let z = 0;
    for(let i=0; i<points.length-1; i++){
        for(let j=i+1; j<points.length; j++){
            if(points[j][0] == points[i][0]){
                // 平行于y轴
                y++;
            } else if(points[j][1] == points[i][1]){
                // 平行于x轴
                x++;
            } else{
                // 斜率
                let k = parseFloat((points[i][1] - points[j][1]) * 1000)/parseFloat(points[i][0] - points[j][0]);
                if(!map.has(k))  map.set(k, points[i]);
            }
        }
        res = Math.max(x, y, res);
        x = 1;
        y = 1;
    }
    map.forEach(function (value, key) {
        for(let i in points){
            if(value[0] == points[i][0] && value[1] == points[i][1]){
                // 同一个点
                z++;
            } else if(parseFloat((value[1] - points[i][1]) * 1000)/parseFloat(value[0] - points[i][0]) == key){
                // 斜率相同
                z++;
            }
        }
        res = Math.max(z, res);
        z = 0;
    });
    return res;
};