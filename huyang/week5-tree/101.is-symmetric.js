// 对称二叉树
// 1、递归
// 时间复杂度：n
// 空间复杂度：1
var isSame = function(p, q) {
    if(!p && !q)   return true;
    if(!p || !q)    return false;
    if(p.val != q.val)  return false;
    return isSame(p.left, q.right) && isSame(p.right, q.left);
};
var isSymmetric = function(root) {
    if(!root)   return true;
    return isSame(root.left, root.right);
};
