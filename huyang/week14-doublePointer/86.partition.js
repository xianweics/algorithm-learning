// 分隔链表
// 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
// 你应当保留两个分区中每个节点的初始相对位置。
// 时间复杂度：n
// 空间复杂度：n
var partition = function(head, x) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let min = [];
    let max = [];
    while(p){
        if(p.val >= x){
            max.push(p.val);
        } else{
            min.push(p.val);
        }
        p = p.next;
    }
    for(let i in min){
        s.next = new ListNode(min[i]);
        s = s.next;
    }
    for(let i in max){
        s.next = new ListNode(max[i]);
        s = s.next;
    }
    return newHead.next;
};


var partition = function(head, x) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let q = head;
    let tmp = [];
    while(p){
        if(p.val < x)   tmp.push(p.val);
        p = p.next;
    }
    while(q){
        if(q.val >= x)  tmp.push(q.val);
        q = q.next;
    }
    for(let i in tmp){
        s.next = new ListNode(tmp[i]);
        s = s.next;
    }
    return newHead.next;
};