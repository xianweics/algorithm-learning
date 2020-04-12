// 二叉树的遍历-深度优先
// 前序、中序、后序遍历都属于深度优先遍历

// 二叉树的遍历-递归

// 前/先序：根左右
var DLR = function(root, res) {
    if(!root)   return ;
    res.push(root.val);
    root.left && DLR(root.left, res);
    root.right && DLR(root.right, res);
}

// 中序：左根右
var LDR = function(root, res) {
    if(!root)   return ;
    root.left && LDR(root.left, res);
    res.push(root.val);
    if(root.right)	LDR(root.right, res);
}

// 后序：左右根
var LRD = function(root, res) {
    if(!root)   return ;
    root.left && LRD(root.left, res);
    root.right && LRD(root.right, res);
    res.push(root.val);
}


// 二叉树遍历-非递归-迭代-采用栈

// 前序：根左右
var DLR = function(root) {
    if(!root)   return [];
    let res = [];
    let s = [root];
    while(s.length > 0) {
        let p = s.shift();	// 取第一个
        res.push(p.val);
        p.right && s.unshift(p.right);
        p.left && s.unshift(p.left);
    }
    return res;
}

// 中序：左根右
// 先将根节点入栈，找到所有左节点入栈，直到没有左节点为止
// 然后出栈存入结果数组，每出一个，对比该根节点的右子节点是否有左节点，若有则入栈，否则继续出栈
var LDR = function(root) {
    let res = [];
    let s = [];     // 栈
    let p = root;   // 指针
    while(p || s.length > 0) { // 直至左节点为空，即没有左节点为止
        while (p) {
            s.push(p);
            p = p.left;
        }
        // 出栈，存放根节点
        p = s.pop();
        res.push(p.val);
        p = p.right;
    }
    return res;
}

// 后序：左右根
// 后序遍历比较复杂，但是看见网上有个比较好记住的办法：
// 按照与前序相似的方法（前序压栈的顺序是先右后左，这里是先左后右），先得到一个结果，然后对结果倒序一下。
var LRD = function(root) {
    if(!root)   return [];
    let res = [];
    let s = [root];
    while(s.length > 0) {
        let p = s.shift();	// 取第一个
        res.push(p.val);
        p.left && s.unshift(p.left);
        p.right && s.unshift(p.right);
    }
    return res.reverse();
}

// 二叉树的遍历-广度优先
// 非递归-采用队列
// 二叉树的遍历-层次遍历
// 从上往下，从左到右/从右到左
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
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        res.push(temp);
    }
    return res;
};
