// N叉树的最大深度
// 给定一个 N 叉树，找到其最大深度。最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
// 时间复杂度：n*n
// 空间复杂度：n
var maxDepth = function(root) {
    if(!root)   return 0;
    let max = 0;
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        for(let i in q){
            let p = q[i];
            for(let j in p.children){
                tmp.push(p.children[j]);
            }
        }
        q = tmp;
        max++;
    }
    return max;
};