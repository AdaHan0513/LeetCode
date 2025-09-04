// https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

function removeElement(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2.     // 5
console.log(removeElement(nums, val));



