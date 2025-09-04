// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
// 每个元素最多出现1次

function removeDuplicates(nums) {
    let slow = 0
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
    }
    return slow + 1
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums));
