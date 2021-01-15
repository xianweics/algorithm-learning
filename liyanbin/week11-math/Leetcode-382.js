/**
算法实现
简单思路
因为每个数被取出的概率都是 1/n
1.循环这个链表，计算出它的个数 n
2.通过random函数随机计算一个[0,1)的数 r
3.n * r 取整得到的 i 值即为我们随机取出数的链表索引
4.此时我们继续循环链表取出 第 i 个索引的值，这个值就是我们随机取出来的值

优化
上面的思路中我们需要循环两次链表，时间复杂度为o(n²)，需要考虑的是如何循环一次随机取出对应的值

这里我们先把方案说下，链表长度为n，随机抽取的目标节点为target，我们循环访问这个链表

优化思路1
访问到
第1个节点，我们则在[1,1]选取节点，第1个节点则为目标节点target
第2个节点，我们则在[1,2]选取节点，如果随机选择的节点是2，则目标节点为索引2的节点，否则节点不变
第3个节点，我们则在[1,3]选取节点，如果随机选择的节点是3，则目标节点为索引3的节点，否则节点不变
......
第n个节点，我们则在[1,n]随机选取节点，如果随机选择的节点是n,则目标节点为索引n的节点，否则节点不变

优化思路2
访问到
第1个节点，[0,1)随机选取一个小数，如果小于1，则target为第1节点
第2个节点，[0,1]随机选取一个小数，如果小于1/2，则target为第2个节点
第3个节点，[0,1]随机选取一个小数，如果小于1/3，则target为第3个节点
......
第n个节点，[0,1]随机选取一个小数，如果小于1/n，则target为第n个节点

上面两种思路原理都是一样的，仅仅是实现方式不一样，都是每次循环访问的时候，判断要不要替换目标节点
上面的思路是怎么来的呢？ 看下面一段公式
第1次：1
第2次：1*(1/2)
第3次：1*(1/2)(2/3)
第4次：1(1/2)(2/3)(3/4)
......
第n次：1*(1/2)(2/3)(3/4)***((n-1)/n)

如果还不理解，进一步解释：
第1次访问，肯定为第1个节点
第2次访问，1 和 2 选中的概率 都为 1/2，1和2 我们随机选个数作为目标值target
第3次访问，3选中的概率为1/3,其它两个值（1,2）选中的概率为2/3，由于我们已经随机抽取出 1 和 2 的一个随机数，那么我们可以这样理解，选中3的概率为1/3，选中target的概率为2/3
.....
第n次访问，n选中的概率1/n，同理targe选中的概率为(n-1)/n

 */

var Solution = function(head) {
    this.head = head
};


//优化思路1代码
Solution.prototype.getRandom = function() {
    var loopNode = this.head,i = 0
    var target
    while(loopNode != null){
        i ++
        var random = Math.floor(Math.random()*i)
        if(random === i-1){
            target = loopNode
        }
        loopNode = loopNode.next
    }
    return target.val
};

//优化思路2代码
Solution.prototype.getRandom = function() {
    var loopNode = this.head,i = 0
    var target
    while(loopNode != null){
        i ++
        var prob = 1/i
        var random = Math.random()
        if(random < prob){
            target = loopNode
        }
        loopNode = loopNode.next
    }
    return target.val
};
