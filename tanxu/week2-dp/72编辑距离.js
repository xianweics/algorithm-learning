// dp[i][j] 代表 word1 到 i 位置转换成 word2 到 j 位置需要最少步数
//
// 所以，
//
// 当 word1[i] == word2[j]，dp[i][j] = dp[i-1][j-1]；
//
// 当 word1[i] != word2[j]，dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
//
// 其中，dp[i-1][j-1] 表示替换操作，dp[i-1][j] 表示删除操作，dp[i][j-1] 表示插入操作。

var minDistance = function(word1, word2) {
  // 特殊处理占位
  word1 = '*'+word1
  word2 = '*'+word2
  let dp = []
  dp[0] = []
  dp[0][0] = 0
  for (let i = 0; i <= word1.length; i++) {
    dp[i] = []
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0) {
        dp[i][j] = j
        continue
      }
      if (j === 0) {
        dp[i][j] = i
        continue
      }
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
      }
    }
  }
  return dp[word1.length][word2.length]
};

console.log(minDistance('horse','ros'))
