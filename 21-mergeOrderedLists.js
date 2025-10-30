// https://leetcode.cn/problems/merge-two-sorted-lists/description/

function ListNode(val, next = null) {
    this.val = val      // 存当前数据
    this.next = next    // 存连接关系，null表示链表的尾部
}
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1) // 虚拟节点
    let curr = dummy

    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next

        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    curr.next = list1 || list2
    return dummy.next
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) // [1, 1, 2, 3, 4, 4];
