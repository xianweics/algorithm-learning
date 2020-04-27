28.实现 strStr()

题目描述：实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

```
输入: haystack = "hello", needle = "ll"
输出: 2
```

 **示例 2:** 

```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

题解:这题可能考的是其他的什么意思，但是我没太懂，按提议直接indexOf 就成了。下面是代码

```
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};
```

时间复杂度： O(n) 

空间复杂度： O(n) 