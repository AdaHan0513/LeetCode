// https://leetcode.cn/problems/add-two-numbers/description/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(); // 创建一个虚拟头节点
    let current = dummy; // 当前节点指向虚拟头节点
    let carry = 0; // 进位初始化为0

    while (l1 !== null || l2 !== null || carry !== 0) {
        // 获取当前节点的值，如果节点为空则为0
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        // 计算当前位的和，包括进位
        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10); // 计算新的进位
        let digit = total % 10; // 计算当前位的值

        // 创建新节点并添加到结果链表
        current.next = new ListNode(digit);
        current = current.next;

        // 移动到下一个节点
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummy.next; // 返回结果链表的头节点
};
       
