// 自底向上，每一层保存当前层与下一层最短路径和，
// 递归到最上面的只有一个的时候，这个值就是解
var minimumTotal = function(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
};

console.log(minimumTotal([
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]))
