// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

function ListNode(val, next = null) {
    this.val = val
    this.next = next
}
function deleteDuplicates(head) {
    let cur = head
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}

