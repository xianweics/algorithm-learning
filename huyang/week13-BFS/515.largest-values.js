// 在每个树行中找最大值
// 您需要在二叉树的每一行中找到最大的值。
// 时间复杂度：n
// 空间复杂度：n
var largestValues = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp = 'a';
        for(let i in q){
            let p = q[i];
            temp = temp == 'a' ? p.val : Math.max(temp, p.val);
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        res.push(temp);
    }
    return res;
};