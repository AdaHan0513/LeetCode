// https://leetcode.cn/problems/integer-to-roman/submissions/593619853/?envType=study-plan-v2&envId=top-interview-150

function intToRoman(num) {
    // 定义一个映射表，包含所有罗马数字的关键值
    const valueSymbols = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ]
    //存放结果
    const roman = []
    for (let [value, symbol] of valueSymbols) {
        while (num >= value) {
            num -= value
            roman.push(symbol)
        }
        if (num === 0) break
    }
    return roman.join('')
}

console.log(intToRoman(58));
