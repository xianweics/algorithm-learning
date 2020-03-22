41.缺失的第一个正数

题目描述：给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

**示例 1:**

```
输入: [1,2,0]
输出: 3
```

 **示例 2:** 

```
输入: [3,4,-1,1]
输出: 2
```

 **示例 3:** 

```
输入: [7,8,9,11,12]
输出: 1
```

**说明:**

你的算法的时间复杂度应为O(*n*)，并且只能使用常数级别的空间。

题目理解：首先想到的是暴力法，直接for循环，判断在数组的长度内，第一个不包含在内的最小整数，如果都有的话就+1，最后判断一下边界值，下面上代码会更好理解

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let len = nums.length;
    let count=0;
    if(len==0){
        return 1
    }
    let newNums = nums.sort(function(a, b) {
        return a - b;
    })
    for(let i = 1; i < len+1; i++) {
        if(newNums.includes(i)){
            count++;
            if(count==len){
                return ++count
            }
        }else{
            return i
        }
    }
};
```

时间复杂度：O(n)

空间复杂度：O(n)