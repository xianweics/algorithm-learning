// 从前序与中序遍历序列构造二叉树
// 注意:你可以假设树中没有重复的元素。
// 时间复杂度：nlogn
// 空间复杂度：1
// 解题思路：前序遍历数组的第一个元素为树的根节点，在中序遍历中找到该元素，该元素前的元素为树的左节点，该元素后的元素为树的右节点，然后通过递归的方式来构造树。
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0)    return null;
    if(preorder.length == 1)    return new TreeNode(preorder[0]);
    let root = new TreeNode(preorder[0]);
    let i = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return root;
};