62.不同路径

题目描述：一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

![1584860804125](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1584860804125.png)

例如，上图是一个7 x 3 的网格。有多少可能的路径？

**示例 1:**

```
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
```

**示例 2:**

```
输入: m = 7, n = 3
输出: 28
```

**提示：**

- `1 <= m, n <= 100`
- 题目数据保证答案小于等于 `2 * 10 ^ 9`

题解：这题我是根据数学的排列组合方法来做的，总结一下规律，然后把他表达出来，最后在求一下边界值，下面上代码吧，会比较清楚的理解

```
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m == 1) {
        return 1
    }
    if(n == 1) {
        return 1
    }
    if(n>=2&&m>=2){
        var result1 = m + n - 2;
        var num1 = m + n - 2;
        while(num1 > 1) {
            num1--;
            result1 *= num1;
        }
        var result2 = n - 1;
        var num2 = n - 1;
        while(num2 > 1) {
            num2--;
            result2 *= num2;
        }
        var result3 = m - 1;
        var num3 = m - 1;
        while(num3 > 1) {
            num3--;
            result3 *= num3;
        }
        return result1 / (result2 * result3)
    }
};
```

时间复杂度：O(m+n)

空间复杂度：O(m+n)