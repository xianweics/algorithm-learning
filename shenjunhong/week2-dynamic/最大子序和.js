/**
 * @param {number[]} nums
 * @return {number}
 */
//解题思路 nums[0] 应该要比nums[1]小 才算增加总数，所以我们遇到小的 可以替换掉
//最为最大量比较 max  这是关键
//动态规划
var maxSubArray = function(nums) {
  //在使用时可用来判断某个值是否超出了js可表示的最大值
  var max = -Number.MAX_VALUE;  //表示js能表示的最大数值 //常量
  var sum = 0;
  for (let num of nums) {
    
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    console.log('sum: ', sum);
    max = Math.max(max, sum);
    console.log('max: ', max);
    console.log('--------: ');
  }
  return max;
};

var val = maxSubArray([-2,-1,-3])

console.log('val: ', val);

//时间复杂度为O(n)

//分治法
/**
 * 求最大子序列和
 *
 * @param {*} array 目标数组
 * @param {*} left  左边界
 * @param {*} right 右边界
 * @returns
 */
function maxSubSum(array,left,right){
  var maxLeftSum,maxRightSum
  var maxLeftBorderSum,maxRightBorderSum
  var leftBorderSum,rightBorderSum
  var center

  if(left===right){//基准情形
    if(array[left]>0){
      return array[left]
    }
    else{
      return 0
    }
  }

  center=parseInt((left+right)/2)
  maxLeftSum=maxSubSum(array,left,center)
  maxRightSum=maxSubSum(array,center+1,right)

  maxLeftBorderSum=0
  leftBorderSum=0

  for (let i = center; i >=left; i--) {
    leftBorderSum+= array[i];
    if(leftBorderSum>maxLeftBorderSum){
      maxLeftBorderSum=leftBorderSum
    }
  }

  maxRightBorderSum=0
  rightBorderSum=0
  for (let i = center+1; i <=right; i++) {
    rightBorderSum+=array[i]
    if(rightBorderSum>maxRightBorderSum){
      maxRightBorderSum=rightBorderSum
    }
  }
  var maxSum=max3(maxLeftSum,maxRightSum,maxLeftBorderSum+maxRightBorderSum)
  return maxSum
}

function max3(a,b,c){
  var max=a>b?a:b
  max=max>c?max:c
  return max
}

maxSubSum([4,-3,5,-2,-1,2,6,-2],0,7);