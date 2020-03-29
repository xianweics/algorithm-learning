// dp[i]表示 i天之内最低的买入价格
// dp[i+1] = Math.min(dp[i],prices[i+1])
var maxProfit = function(prices) {
  let dp = [prices[0]]
  let result = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] - dp[i] > result) {
      result = prices[i + 1] - dp[i]
    }
    dp[i+1] = Math.min(dp[i],prices[i+1])
  }
  return result
};

console.log(maxProfit([7,1,5,3,6,4]))
