// https://leetcode.cn/problems/valid-parentheses/
function effectiveParentheses(s) {
    let stack = []
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            if (stack.pop() !== map[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(effectiveParentheses('()[]{}')) // true;
console.log(effectiveParentheses('([)]')) // false
