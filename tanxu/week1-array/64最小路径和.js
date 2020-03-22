/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length

    let dp = []

    for (let i = 0; i < m; i++) {
        dp[i] = []
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j]
            } else {
                // 保存上一个小的dp 加上 当前值
                dp[i][j] = Math.min(i > 0 ? dp[i - 1][j] : Number.MAX_SAFE_INTEGER, j > 0 ? dp[i][j -1] : Number.MAX_SAFE_INTEGER) + grid[i][j]
            }
        }
    }
    return dp[m-1][n -1]
};
