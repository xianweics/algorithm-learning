# 两数之和

> 给定一个整数数组 nums?和一个目标值 target，请你在该数组中找出和为目标值的那?两个?整数，并返回他们的数组下标。
> 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。


示例1:
```
 给定 nums = [2, 7, 11, 15], target = 9
 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]
 ```


-解法1
	整理思路，就是暴力循环
	1.循环数组，获取当前索引i的值，并记录索引i
	2.目标值减去当前索引值获取差值
	3.从 第 i+1 个索引开始循环，获取i+1后面的索引即j 的索引值
	4.如果差值等于索引值则停止循环返回索引i 和 j

  - 代码
```
	javascript
	 var twoSum = function(nums, target) {
		var len = nums.length
		for(var i = 0;i<len;i++){
			var diff = target - nums[i]
			for(var j = i+1;j<len;j++){
				if(nums[j] === diff){
					return [i,j]
				}
			}
		}
	}
 ```
  
- 测试结果
![](result1-1.png)
    
-算法分析
    - 时间复杂度: `O(n2)`
    - 空间复杂度: `O(1)`
    - 逻辑复杂度: `O(1)`

-解法2**(非必须)**
  - 解题思路
    解题的总体思路存储数组下标和索引值，和差值作比较

  - 代码
```javascript
var twoSum = function(nums, target) {
    var a = []
    for(var i = 0;i<nums.length;i++){
        var diff = target - nums[i]
        if(a.hasOwnProperty(diff)){
            return [a[diff],i]
        } 
        a[nums[i]] = i
    }
    return []
}
```    
   - 测试结果
![](result1-2.png)
       
-算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(n)`
    - 逻辑复杂度: `O(n)`

- 总结**(非必须)**
  > 该题总体来说还算比较简单，主要就是学会空间复杂度和时间复杂度的灵活转换