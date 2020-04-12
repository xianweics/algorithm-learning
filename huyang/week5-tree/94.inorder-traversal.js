// 二叉树的中序遍历
// 中序：左根右
// 1、迭代
// 先将根节点入栈，找到所有左节点入栈，直到没有左节点为止
// 然后出栈存入结果数组，每出一个，对比该根节点的右子节点是否有左节点，若有则入栈，否则继续出栈
// 时间复杂度：n
// 空间复杂度：n
var inorderTraversal = function(root) {
    let res = [];
    let s = [];     // 栈
    let p = root;   // 指针
    while(p || s.length > 0){
        while(p){
            s.push(p);
            p = p.left;
        }
        p = s.pop();
        res.push(p.val);
        p = p.right;
    }
    return res;
};

// 2、递归
// 时间复杂度：n
// 空间复杂度：n
var LDR = function(root, res) {
    if(!root)   return ;
    root.left && LDR(root.left, res);
    res.push(root.val);
    if(root.right)	LDR(root.right, res);
};
var inorderTraversal = function(root) {
    let res = [];
    LDR(root, res);
    return res;
};