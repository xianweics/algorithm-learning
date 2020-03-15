11.盛最多水的容器

题目描述：给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

![question_11](C:\Users\aaa\Desktop\新建文件夹\question_11.jpg)

 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。 

 **示例：** 

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```

题目理解：直接循环取每两个元素，并求出他们之间的容量，再取出最大的大一个返回回来，就好了，下面上代码

```
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let arr=height;
    let len=arr.length;
    let maxArea=0;
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            let Area=Math.min(arr[j],arr[i])*(j-i)
            if(Area>=maxArea){
                maxArea=Area;
            }
        }
    }
    return maxArea
};
```

时间复杂度：O(n^2)

空间复杂度：O(n)