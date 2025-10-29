// https://leetcode.cn/problems/sqrtx/

function sqrtx(x) {
    if (x < 2) return x
    let left = 0
    let right = Math.floor(x / 2)
    let ans = 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let square = mid * mid
        if (square === x) {
            return mid
        } else if (square < x) {
            left = mid + 1
            ans = mid
        } else {
            right = mid - 1
        }
    }
    return ans

}
console.log(sqrtx(8));
