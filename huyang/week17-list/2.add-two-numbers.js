// 两数相加
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 时间复杂度：n
// 空间复杂度：1
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let s = head;
    let p1 = l1;
    let p2 = l2;
    let p = 0;      // 进位
    while(p1 || p2 || p){
        let sum = (p1 ? p1.val : 0) +( p2 ? p2.val : 0) + p;
        p = parseInt(sum / 10);
        sum = sum % 10;
        p1 = p1 && p1.next;
        p2 = p2 && p2.next;
        s.next = new ListNode(sum);
        s = s.next;
    }
    return head.next;
};