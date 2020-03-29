// 买卖股票的最佳时机
// 只允许完成一次交易
// min为今天之前的最低点
// max为今天卖出获得的收益
// 时间复杂度：n
// 空间复杂度：1
var maxProfit = function(prices) {
    if(prices.length < 2)  return 0;
    let min = prices[0];
    let max = Math.max(prices[1]-prices[0], 0);
    for(let i=1; i<prices.length; i++){
        min = Math.min(prices[i], min);
        max = Math.max(prices[i]-min, max);
    }
    return max;
};