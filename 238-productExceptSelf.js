// https://leetcode.cn/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150

function productExceptSelf(nums) {
    let n = nums.length
    let arr = new Array(n)
    // 计算左侧乘积
    arr[0] = 1
    for (let i = 1; i < n; i++) {
        arr[i] = arr[i - 1] * nums[i - 1]
    }
    // 计算右侧乘积并与左侧乘积相乘
    let right = 1
    for (let i = n - 1; i >= 0; i--) {
        arr[i] = arr[i] * right
        right = right * nums[i]
    }
    return arr
}

let nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums)) // [24,12,8,6]