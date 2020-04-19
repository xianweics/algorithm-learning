// 相同的树
// 递归
// 时间复杂度：n
// 空间复杂度：1
var isSameTree = function(p, q) {
    if(!p && !q)    return true;
    if(!p || !q)    return false;
    if(p.val != q.val)  return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 2、迭代
// 使用前序、中序、后序遍历的任意一种，比较两个结果数组
// 时间复杂度：n
// 空间复杂度：n