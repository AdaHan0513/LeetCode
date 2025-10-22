// https://leetcode.cn/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150

function minSubArrLen(target, nums) {
    // 1-暴力循环
    // let n = nums.length
    // let minLen = n + 1
    // for (let i = 0; i < n; i++) {
    //     let sum = 0
    //     for (let j = i; j < n; j++) {
    //         sum += nums[j]
    //         if (sum >= target) {
    //             minLen = Math.min(minLen, j - i + 1)
    //             break
    //         }
    //     }
    // }
    // return minLen === n + 1 ? 0 : minLen

    let n = nums.length
    let minLen = n + 1
    let sum = 0
    let left = 0
    for (let right = 0; right < n; right++) {
        sum += nums[right]
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return minLen === n + 1 ? 0 : minLen
}
console.log(minSubArrLen(7, [2, 3, 1, 2, 4, 3]));
