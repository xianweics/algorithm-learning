// 旋转链表
// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 时间复杂度：n
// 空间复杂度：n
var rotateRight = function(head, k) {
    if(k == 0)  return head;
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let len = 0;
    while(p){
        len++;
        p = p.next;
    }
    k = k%len;
    if(k == 0)  return head;
    k = len - k;
    let q = head;
    let tmp = [];
    while(q){
        if(k > 0){
            tmp.push(q.val);
        } else{
            s.next = new ListNode(q.val);
            s = s.next;
        }
        q = q.next;
        k--;
    }
    for(let i in tmp){
        s.next = new ListNode(tmp[i]);
        s = s.next;
    }
    return newHead.next;
};


// 时间复杂度：n
// 空间复杂度：1
var rotateRight = function(head, k) {
    if(k == 0)  return head;
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let len = 0;
    while(p){
        len++;
        p = p.next;
    }
    k = k%len;
    if(k == 0)  return head;
    k = len - k;
    let q1 = head;
    let q2 = head;
    let count = 0;
    while(q1){
        if(count >= k){
            s.next = new ListNode(q1.val);
            s = s.next;
        }
        q1 = q1.next;
        count++;
    }
    count = 0;
    while(q2){
        if(count < k){
            s.next = new ListNode(q2.val);
            s = s.next;
        } else{
            break;
        }
        q2 = q2.next;
        count++;
    }
    return newHead.next;
};