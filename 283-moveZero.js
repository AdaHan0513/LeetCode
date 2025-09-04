// https://leetcode.cn/problems/move-zeroes/?envType=study-plan-v2&envId=top-100-liked

function moveZero(nums) {
    if (nums.length <= 1) return nums
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
    return nums
}
let nums = [0, 1, 0, 3, 12]
let res = moveZero(nums)
console.log(res);
