// dp[n] = dp[n-1] + dp[n-2] + 2

var climbStairs = function(n) {
    let dp = []
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    if (n <=3 ) return dp[n]
    for (let i = 4; i <=n; i++) {
        dp[i] = dp[i - 1] + dp[i + 2]
    }
    return dp[n]
};
