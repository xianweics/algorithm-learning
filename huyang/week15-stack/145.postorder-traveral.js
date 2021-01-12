// 二叉树的后序遍历
// 左右根
// 迭代
// 按照与前序相似的方法（前序压栈的顺序是先右后左，这里是先左后右），先得到一个结果，然后对结果倒序一下。
// 时间复杂度：n
// 空间复杂度：n
var postorderTraversal = function(root) {
    if(!root)   return [];
    let res = [];
    let s = [root];
    while(s.length > 0){
        let p = s.shift();
        res.push(p.val);
        p.left && s.unshift(p.left);
        p.right && s.unshift(p.right);
    }
    return res.reverse();
};