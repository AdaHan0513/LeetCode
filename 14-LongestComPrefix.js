// https://leetcode.cn/problems/longest-common-prefix/
function longestCommonPrefix(strs) {
    let [first, ...rest] = strs;
    let res = []
    for (let i = 0; i < first.length; i++) {
        let val = first[i];
        if (rest.every(item => item[i] === val)) {
            res.push(val);
        } else {
            res.join('');
        }
    }
    return res.join('');
}
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); 