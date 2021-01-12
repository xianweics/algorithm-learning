// 合并两个有序链表
// 时间复杂度：n
// 空间复杂度：1
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0);
    let s = head;
    let p1 = l1;
    let p2 = l2;
    while(p1 || p2){
        if(!p1 || (p1 && p2 && p2.val <= p1.val)){
            s.next = new ListNode(p2.val);
            p2 = p2.next;
        } else{
            s.next = new ListNode(p1.val);
            p1 = p1.next;
        }
        s = s.next;
    }
    return head.next;
};