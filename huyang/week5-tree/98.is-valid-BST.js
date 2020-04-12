// 验证二叉搜索树
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 中序（左根右）遍历为升序
// 1、迭代
// 先将根节点入栈，找到所有左节点入栈，直到没有左节点为止
// 然后出栈存入结果数组，每出一个，对比该根节点的右子节点是否有左节点，若有则入栈，否则继续出栈
// 时间复杂度：n
// 空间复杂度：n
var isValidBST = function(root) {
    let res = [];
    let s = [];     // 栈
    let p = root;   // 指针
    while(p || s.length > 0){
        while(p){
            s.push(p);
            p = p.left;
        }
        p = s.pop();
        if(p.val <= res[res.length-1]){
            return false;
        } else{
            res.push(p.val);
        }
        res.push(p.val);
        p = p.right;
    }
    return true;
};

// 2、递归
// 时间复杂度：n
// 空间复杂度：n
var LDR = function(root, res) {
    if(!root)   return true;
    root.left && LDR(root.left, res);
    res.push(root.val);
    root.right && LDR(root.right, res);
};
var isValidBST = function(root) {
    let res = [];
    LDR(root, res);
    for(let i = 0; i < res.length-1; i++){
        if(res[i+1] <= res[i])  return false;
    }
    return true;
};