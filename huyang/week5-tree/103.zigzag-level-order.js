// 二叉树的锯齿形层序遍历
// 非递归-采用队列。
// 从上往下，奇数层从左到右，偶数层从右到左
// 时间复杂度：n
// 空间复杂度：n
var zigzagLevelOrder = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp =[];
        for(let i in q){
            let p = q[i];
            temp.push(p.val);
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        if(res.length == 0 || res.length % 2 == 0){
            res.push(temp);
        } else{
            res.push(temp.reverse());
        }
    }
    return res;
};