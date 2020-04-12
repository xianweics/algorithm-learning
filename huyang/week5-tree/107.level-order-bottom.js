// 二叉树的层序遍历II
// 非递归-采用队列。从下往上，从左到右
// 时间复杂度：n
// 空间复杂度：n
var levelOrderBottom = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp = [];
        for(let i in q){
            let p = q[i];
            temp.push(p.val);
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        res.push(temp);
    }
    return res.reverse();
};