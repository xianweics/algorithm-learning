// 从中序与后序遍历序列构造二叉树
// 注意:你可以假设树中没有重复的元素。
// 时间复杂度：nlogn
// 空间复杂度：1
// 解题思路：后序遍历数组的最后一个元素为树的根节点，在中序遍历中找到该元素，该元素前的元素为树的左节点，该元素后的元素为树的右节点，然后通过递归的方式来构造树。
var buildTree = function(inorder, postorder) {
    if(postorder.length == 0)    return null;
    if(postorder.length == 1)    return new TreeNode(postorder[0]);
    let root = new TreeNode(postorder[postorder.length - 1]);
    let i = inorder.indexOf(postorder[postorder.length - 1]);
    root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
    root.right = buildTree(inorder.slice(i + 1), postorder.slice(i, -1));
    return root;
};