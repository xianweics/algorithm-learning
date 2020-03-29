// 汇总区间
var summaryRanges = function(nums) {
    let tmp = [nums[0]];
    let res = [];
    for(let i=1; i<= nums.length; i++){
        if(nums[i]-1 == nums[i-1]){
            tmp.push(nums[i]);
        } else{
            if(tmp.length > 1){
                res.push(tmp[0] + '->' + tmp[tmp.length-1]);
            } else{
                res.push(tmp[0] + '');
            }
            tmp = [nums[i]];
        }
    }
    return res;
};