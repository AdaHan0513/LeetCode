// https://leetcode.cn/problems/gas-station/?envType=study-plan-v2&envId=top-interview-150
function canCompleteCircuit(gas, cost) {
    let totalGas = 0
    let currentGas = 0
    let start = 0
    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i]
        totalGas += diff
        currentGas += diff
        if (currentGas < 0) {
            start = i + 1
            currentGas = 0
        }
    }
    return totalGas >= 0 ? start : -1
}

let gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
console.log(canCompleteCircuit(gas, cost)) // 3