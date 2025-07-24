// https://leetcode.cn/problems/maximum-subarray/description/
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], nums[i] + currentSum)  // 当前元素和当前和加上当前元素的最大值
        maxSum = Math.max(maxSum, currentSum);  // 更新最大和
    }
    return maxSum;  // 返回最大子数组和
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6