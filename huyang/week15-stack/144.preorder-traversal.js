// 二叉树的前序遍历
// 根左右
// 迭代
// 时间复杂度：n
// 空间复杂度：n
var preorderTraversal = function(root) {
    if(!root)   return [];
    let res = [];
    let s = [root];
    while(s.length > 0){
        let p = s.shift();
        res.push(p.val);
        p.right && s.unshift(p.right);
        p.left && s.unshift(p.left);
    }
    return res;
};