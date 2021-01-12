// 跳跃游戏
// 时间复杂度：n*n
// 空间复杂度：1
// 从终点前一位开始寻找，当遇到【步数为0的位置】时，寻找该位置前是否有节点可以直接跨过这个【步数为0】的位置
// 有则跳出循环，继续向前寻找【步数为0的位置】
// 没有则返回false
// 如果能跨过所有【步数为0的位置】，则返回true
var canJump = function(nums) {
    if(nums.length == 1)    return true;    // 起点即终点
    if(nums[0] == 0)    return false;   // 出不了门
    // 从终点前一位开始寻找
    for(let i=nums.length-2; i>0;i--){
        // 当遇到【步数为0的位置】时
        if(nums[i] == 0){
            // 寻找该位置前是否有节点可以直接跨过这个【步数为0】的位置
            for(let j=i-1; j>=0; j--){
                if(nums[j] > i-j){
                    // 有，跳出循环，继续向前寻找【步数为0的位置】
                    break;
                }
                if(j == 0){
                    // 没有，返回false
                    return false;
                }
            }
        }
    }
    return true;
};