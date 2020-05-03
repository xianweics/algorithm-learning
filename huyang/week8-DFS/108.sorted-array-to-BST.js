// 将有序数组转换为二叉搜索树
// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
// 时间复杂度：nlogn
// 空间复杂度：1
// 解题思路：数组的中值为二叉树的根结点，较小的作为左子树，较大的为右子树
var sortedArrayToBST = function(nums) {
    if(nums.length == 0)    return null;
    if(nums.length == 1)    return new TreeNode(nums[0]);
    let mid = parseInt(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
};