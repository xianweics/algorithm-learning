## 后序遍历

> 给定一个二叉树，返回它的 后序 遍历。

示例1:
```text
输入: 输入: [1,null,2,3]  
   1
    \
     2
    /
   3 
输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
```


- 解法1
  - 解题思路    
    动态规划法
	
	第一步：首先进行前序遍历
	第二步：对结果逆序
	
	伪代码如下：
	
	stack 栈数组;
	res 结果数组;
	p = 根;
	while(p || res.len > 0){
		while(p){
			p 入 res;
			p.left 入 stack
			p = p.right
		}
		p = stack 的尾
	}
	res 逆序

    
  - 代码
``` javascript
		var postorderTraversal = function(root) {
		    var stack = []
		    var p = root
		    var res = []
		    while(p || stack.length > 0){
		        while(p){
		            stack.push(p.left)
		            res.push(p.val)
		            p = p.right
		        }
		        p = stack.pop()
		    }
		    return res.reverse()
		};
	
	
```
  
-测试结果
![](result4-145.png)
    
-算法分析
    - 时间复杂度: `O(n2 + n)`
    - 空间复杂度: `O(2n+1)`

- 解法2**(非必须)**
  - 解题思路
    1.分配栈空间与移动节点
	2.循环将根及左侧树压入栈
	3.从栈顶取节点右子树，并将节点状态设为 1 ，注意此时节点已无右子树
	4.循环将栈顶中节点为状态为1的节点放入结果数组中
	
	总体思路：
	第一步：将根压入栈，左子树和右子树设置状态， 状态默认都为空 ，
	第二步：当访问右子树时，将该节点状态设为1
	第三步：当左子树都访问结束后，如果栈顶状态为1，则将栈顶的节点值放入结果数组中
    
-代码
```javascript
    var postorderTraversal = function(root) {
        var stack = []
        var p = root
        var res = []
        while(p || stack.length > 0){  当前节点不为空 或者 栈不为空时
            while(p){//一次将根及左子树根压入栈
                stack.push(p)
                p = p.left
            }
            while(stack.length > 0 && stack[stack.length - 1].status === 1){//当栈顶的状态为1的时候，将节点值放入结果数组中
                res.push(stack.pop())
            }
            if(stack.length > 0){//当访问右子树节点是，将当前节点的状态值设为1，
                p = stack[stack.length - 1].right;
                stack[stack.length - 1].status = 1
            }
        }
        return res
    };
```
    
-测试结果
![](result4-145-2.png)
       
-算法分析
    - 时间复杂度: `O(n2)`
    - 空间复杂度: `O(2n)`

-总结**(非必须)**
  > 知道有这么一个解题思路，但是不知道  这个思路 是 怎么来的，感觉 有点  拿来主义，但是没有完全拿到