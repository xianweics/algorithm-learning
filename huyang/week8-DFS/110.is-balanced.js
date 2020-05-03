// 平衡二叉树
// 一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1。
// 时间复杂度：nlogn
// 空间复杂度：1
// 解题思路：求左右子树的高度，同时判断是否平衡，某个子树不平衡就返回-1。
var treeDepth = function(root){
    if(root == null) return 0;
    let left = treeDepth(root.left);
    if(left == -1) return -1;
    let right = treeDepth(root.right);
    if(right == -1) return -1;
    return Math.abs(left - right) > 1 ? -1 : Math.max(left,right) + 1;
}
var isBalanced = function(root) {
    return treeDepth(root) != -1;
};