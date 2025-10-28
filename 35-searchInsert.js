// https://leetcode.cn/problems/search-insert-position/

function searchInsert(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

let res = searchInsert([1, 3, 5, 6], 7)
console.log(res);     // 4
