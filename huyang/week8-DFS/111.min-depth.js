// 二叉树的最小深度
// 时间复杂度：nlogn
// 空间复杂度：1
// 解题方法：递归
var minDepth = function(root) {
    if(!root)   return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    return left && right ? Math.min(left, right) + 1 : left + right + 1;
};