/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  //1. 解决思路 生成动态规划
  const result = [];
  if (numRows <= 0) { 
    return result;
  }
  for (let i = 0; i < numRows; i++) {
    const subArr = [];
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        subArr.push(result[i - 1][j - 1] + result[i - 1][j]);
      } else {
        subArr.push(1);
      }
    }
    result.push(subArr);
  }
  return result;
};
时间复杂度为O(2的n次方)
