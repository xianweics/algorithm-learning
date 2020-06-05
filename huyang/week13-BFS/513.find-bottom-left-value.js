// 找树左下角的值
// 给定一个二叉树，在树的最后一行找到最左边的值。
// 时间复杂度：n
// 空间复杂度：n
var findBottomLeftValue = function(root) {
    if(!root)   return [];
    let res = '';
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp = 'a';
        for(let i in q){
            let p = q[i];
            if(temp == 'a') temp = p.val;
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        res = temp;
    }
    return res;
};