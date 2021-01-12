/**
81. 搜索旋转排序数组 II
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

示例 1:

输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true

示例 2:

输入: nums = [2,5,6,0,0,1,2], target = 3
输出: false
 */



var search = function(nums, target) {

    var start,end,last = nums.length - 1
    if(nums[last] === target) return true
    var index = findOriginIndex()
    if(index === -1){
        start = 0
        end = last
    }else if(nums[last] > target){
        start = index
        end = last
    }else if(nums[last] < target){
        start = 0
        end = index - 1
    }

    while(start <= end){
        var mid = Math.floor((start + end)/2)
        if(nums[mid] === target){
            return true
        }else if(nums[mid] > target){
            end = mid - 1
        }else if(nums[mid] < target){
            start = mid + 1
        }
    }

    return false


    function findOriginIndex(){
        for(var i = 1;i<nums.length;i++){
            if(nums[i - 1] > nums[i]){
                return i
            }
        }
        return -1
    }
};