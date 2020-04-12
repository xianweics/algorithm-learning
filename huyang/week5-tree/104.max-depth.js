// 二叉树的最大深度
// 层序遍历的层数
// 时间复杂度：n
// 空间复杂度：n
var maxDepth = function(root) {
    if(!root)   return 0;
    let max = 0;
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        for(let i in q){
            let p = q[i];
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        max++;
    }
    return max;
};