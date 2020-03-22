
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let money = 0
  let buy = prices[0]
  for (let price of prices) {
    console.log('price: ', price);
    if (price > buy) {
      money += price - buy
    }
    buy = price
  }
  return money
};

const val = /* maxProfit([7,1,5,3,6,4]); */
/* maxProfit([1,2,3,4,5]) */
maxProfit([7,6,4,3,1])
console.log('maxProfit', val);

时间复杂度为O(n)