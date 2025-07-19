// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// 1-循环暴力解法
var maxProfit = function (prices) {
    let len = prices.length
    if (len === 0) return 0
    let min = prices[0]
    let maxVal = 0
    for (let i = 1; i < len; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > maxVal) {
            maxVal = prices[i] - min
        }
    }
    return maxVal
}

// 2-贪心算法(最优解)
var maxProfit = function (prices) {
    let len = prices.length
    if (len === 0) return 0
    let min = prices[0]
    let maxVal = 0
    for (let p of prices) {
        min = Math.min(min, p)
        maxVal = Math.max(maxVal, p - min)
    }
    return maxVal
}
//  3-动态规划
var maxProfit = function (prices) {
    let len = prices.length
    if (len === 0) return 0
    let dp = new Array(len).fill(0)
    // dp 是一个二维数组，dp[i] 表示在第 i 天的状态
    // dp[i][0] 表示在第 i 天持有股票时的最大利润
    // dp[i][1] 表示在第 i 天不持有股票时的最大利润
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < len; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], -prices[i]),
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
        ]
    }
    return dp[len - 1][1]
}

let res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res);
