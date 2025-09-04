// https://leetcode.cn/problems/container-with-most-water/?envType=study-plan-v2&envId=top-100-liked

function maxArea(height) {
    let left = 0
    let right = 0
    let maxArea = 0
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, area)
        if (left < right) {
            left++
        } else {
            right--
        }
    }
    return maxArea
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let res = maxArea(height)
console.log(res);