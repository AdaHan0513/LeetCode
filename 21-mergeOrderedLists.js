// https://leetcode.cn/problems/merge-two-sorted-lists/description/
function mergeTwoLists(list1, list2) {
    let mergedList = [];
    let i = 0, j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            mergedList.push(list1[i]);
            i++;
        } else {
            mergedList.push(list2[j]);
            j++;
        }
    }

    // If there are remaining elements in list1
    while (i < list1.length) {
        mergedList.push(list1[i]);
        i++;
    }

    // If there are remaining elements in list2
    while (j < list2.length) {
        mergedList.push(list2[j]);
        j++;
    }

    return mergedList;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) // [1, 1, 2, 3, 4, 4];
