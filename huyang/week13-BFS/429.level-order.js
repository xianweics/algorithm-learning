// N叉树的层序遍历
// 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
// 时间复杂度：n*n
// 空间复杂度：n
var levelOrder = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp = [];
        for(let i in q){
            let p = q[i];
            temp.push(p.val);
            for(let j in p.children){
                tmp.push(p.children[j]);
            }
        }
        q = tmp;
        res.push(temp);
    }
    return res;
};