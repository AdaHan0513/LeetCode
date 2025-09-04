// https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked
function longestConsecutive(nums) {
    if (nums.length <= 1) return nums
    let set = new Set(nums)
    let longest = 0
    let currentNum = 0
    for (let num of set) {
        if (!set.has(num - 1)) {
            currentNum = num
            let length = 1
            while (set.has(currentNum + 1)) {
                currentNum++
                length++
            }
            longest = Math.max(longest, length)
        }
    }
    return longest
}
let nums = [100, 4, 200, 1, 3, 2]
let res = longestConsecutive(nums)
console.log(res);
