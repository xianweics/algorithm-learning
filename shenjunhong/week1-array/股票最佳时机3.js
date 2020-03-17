/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  let money = 0;
  let two = [];
  for(let price of prices){
    if (price > buy) {
      money = price - buy;
      two.push(money);
    };
    buy = price
  }
  console.log('two', two)
  return money
};


var val = 
maxProfit([3,3,5,0,0,3,1,4])
/* maxProfit([1,2,3,4,5]) */
console.log('val ', val)