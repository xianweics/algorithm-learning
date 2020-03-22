/**
 * @param {number} n
 * @return {number}
 */
//新增一份缓存吧容器
var cache = [];
var count = 0;
var climbStairs = function(n) {
  count++;
  //判断是否存在于缓存数组中，存在就直接返回
  if(cache[n]!=undefined){
      return cache[n];
  }

  if(n < 2) return cache[n] = 1;
  var temp= climbStairs(n-1) + climbStairs(n-2)
  cache[n]=temp;
  return temp
};

var val  =  climbStairs(1)
var val  =  climbStairs(3)
var val  =  climbStairs(44)

console.log('val: ', val);

// 自己分析了一下
/*
  2:  1. 1+1 
      2. 2+0

  3:  1: 1+1+1
      2: 1+2
      3: 2+1
      
  4:  1: 1+1+1+1
      2: 1+2+1
      3: 1+1+2
      4: 2+1+1
      5: 2+2
  
  5. 



*/

