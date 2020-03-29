/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
  if(!nums.length) return 0
  var val2 = 0;
  var val1 = 0;
  var count1 =0;
  var count2 =1;

  var arr = [];

  var len = nums.length;
  //这个题  我的第一个想法就是在数组里面创建0，1，3，4 然后加起来
  //这边是不是要考虑到一半节省性能 在数组中间就不用考虑了
  if(len < 2) return nums[0];
  if(len < 3) return Math.max(nums[0], nums[1]) ;
  while(count1 < len){
    val1 += nums[count1];
    count1 = count1 +2;

    if(count2 < len) {
      val2 += nums[count2];
      count2 = count2 +2;
    }
  }
  arr.push(val1, val2);
  return Math.max(arr[0], arr[1]);
};
/* var val = rob([1,2]) */
/* var val = rob([1,2,3,1]) */
/* var val = rob([2,7,9,3,1]); */
var val = rob([2,1,1,2]);   //没有考虑到这种情况  因此上面代码失效
/* var val = rob([]); */
console.log('val: ', val);




//透露出本质
var rob = function(nums) {
  if(!nums.length) return 0
  // maxMoney是上次的最大收益
  if (nums.length === 0) {
    return 0;
  }
  let maxMoney = nums[0];
  for (let i = 0 ; i<nums.length ; i++ ) {
      nums[i] = Math.max(nums[i-2] || 0, nums[i-3] || 0) + nums[i];
      if (nums[i] > maxMoney) {
          maxMoney = nums[i] 
      }
  }

  return maxMoney;
}


//时间复杂度为O(n)