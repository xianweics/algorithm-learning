// 路径总和
// 时间复杂度：
// 空间复杂度：1
// 解题方法：递归
var hasPathSum = function(root, sum) {
    if(!root)   return false;
    if(root.left == null && root.right == null)  return sum - root.val == 0;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};