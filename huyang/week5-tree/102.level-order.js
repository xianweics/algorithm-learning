// 二叉树的层序遍历
// 非递归-采用队列。从上往下，从左到右
// 时间复杂度：n
// 空间复杂度：n
var levelOrder = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp  = [];
        for(let i in q){
            let p = q[i];
            temp.push(p.val);
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        res.push(temp);
    }
    return res;
};