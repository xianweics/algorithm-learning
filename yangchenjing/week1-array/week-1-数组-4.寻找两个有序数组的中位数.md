4.寻找两个有序数组的中位数

题目描述：给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

 **示例 2:** 

```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

题解：根据数学思路先判断特殊情况和正常情况，然后排序分两种情况来去除中间的 一个数或是两个数，再求最终的中位数并返回，下面上代码，看了代码会比较容易理解

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m=nums1.length;
    let n=nums2.length;
    let val;
    if(m==0){
        n/2==parseInt(n/2)? val=(nums2[n/2-1]+nums2[n/2])/2:val=nums2[Math.ceil(n/2)-1];
    }else if(n==0){
        m/2==parseInt(m/2)? val=(nums1[m/2-1]+nums1[m/2])/2:val=nums1[Math.ceil(m/2)-1];
    }else{
        let newNum=nums1.concat(nums2).sort(function(a, b){return a - b});
        let len=newNum.length;
        len/2==parseInt(len/2)? val=(newNum[len/2-1]+newNum[len/2])/2:val=newNum[Math.ceil(len/2)-1];
    }
    return val
    
};
```

时间复杂度： O( n* log (n) ) 

空间复杂度：O(m+n)
