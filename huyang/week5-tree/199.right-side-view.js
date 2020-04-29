// 二叉树的右视图
// 时间复杂度：n
// 空间复杂度：n
// 解题思路：二叉树的层次遍历，从左到右，将每层的最右侧的节点push到结果数组中
var rightSideView = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp = '';
        for(let i in q){
            let p = q[i];
            temp = p.val;
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        res.push(temp);
    }
    return res;
};