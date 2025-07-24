// https://leetcode.cn/problems/is-object-empty/description/
function isObjEmpty(obj) {
    return Object.keys(obj).length == 0
}

console.log(isObjEmpty({})) // true
console.log(isObjEmpty({ a: 1 })) // false
