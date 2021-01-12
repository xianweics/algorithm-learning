// 删除链表的倒数第N个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 时间复杂度：n
// 空间复杂度：n
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let q = head;
    let len = 0;    // 链表长度
    while(q){
        len++;
        q = q.next;
    }
    n = len - n;    // 正数第n个
    while(p){
        if(n != 0){
            s.next = new ListNode(p.val);
            s = s.next;
        }
        p = p.next;
        n--;
    }
    return newHead.next;
};