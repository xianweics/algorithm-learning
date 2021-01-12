// 两两交换链表中的节点
// 时间复杂度：n
// 空间复杂度：1
var swapPairs = function(head) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let tmp = 'tmp';
    while(p){
        if(tmp != 'tmp'){
            s.next = new ListNode(p.val);
            s = s.next;
            p = p.next;
            s.next = new ListNode(tmp);
            s = s.next;
            tmp = 'tmp';
        } else{
            tmp = p.val;
            p = p.next;
        }
    }
    if(tmp != 'tmp'){
        s.next = new ListNode(tmp);
        s = s.next;
    }
    return newHead.next;
};