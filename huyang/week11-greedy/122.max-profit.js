// 买卖股票的最佳时机II
// 后一天价格比前一天价格高，就在前一天买入，这天卖出
// 时间复杂度：n
// 空间复杂度：1
var maxProfit = function(prices) {
    let count = 0;
    for(let i=0; i<prices.length-1; i++){
        if(prices[i+1] > prices[i])	count += (prices[i+1] - prices[i]);
    }
    return count;
};