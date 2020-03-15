/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp = []

    for (let i = 0; i < m; i++) {
        dp[i] = []
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
            } else if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] = (i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j -1] : 0)
            }
        }
    }
    return dp[m-1][n -1]
};
