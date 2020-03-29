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

};
