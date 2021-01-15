/**
528. 按权重随机选择
给定一个正整数数组 w ，其中 w[i] 代表下标 i 的权重（下标从 0 开始），请写一个函数 pickIndex ，它可以随机地获取下标 i，选取下标 i 的概率与 w[i] 成正比。

例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。

也就是说，选取下标 i 的概率为 w[i] / sum(w) 。

 

示例 1：

输入：
["Solution","pickIndex"]
[[[1]],[]]
输出：
[null,0]
解释：
Solution solution = new Solution([1]);
solution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。
示例 2：

输入：
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
输出：
[null,1,1,1,1,0]
解释：
Solution solution = new Solution([1, 3]);
solution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。

由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:
[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
诸若此类。
 

提示：

1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex 将被调用不超过 10000 次
 */


 /**
 * 解题思路：根据区间值来判断每个索引值出现的概率，两种方式，一种牺牲空间，预置好每个索引的索引值区间，可以放到数组中，也可以放到map中从而快速定位
 * 另外一种方式则需要牺牲时间，每次计算索引值区间，从而根据随机值，判断所处的区间，返回对应索引
 * @param {number[]} w
 */
var Solution = function(w) {
    this.w = w
    this.total = 0
    for(var v of w){
        this.total += v
    }
    this.propMap = {}
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    var randomProb = Math.random()
    var currentProb = 0
    for(var i = 0;i<this.w.length;i++){
        var prob = currentProb + this.w[i]/this.total
        if(randomProb >= currentProb && randomProb < prob){
            return i
        }
        currentProb = prob
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */