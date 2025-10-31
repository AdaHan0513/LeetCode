// https://leetcode.cn/problems/add-binary/submissions/674736232/

function addBinary(a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0
    let res = ''
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry
        if (i >= 0) sum += Number(a[i--])
        if (j >= 0) sum += Number(b[j--])
        res = (sum % 2) + res
        carry = Math.floor(sum / 2)
    }
    return res
}

let a = "1010", b = "1011"
console.log(addBinary(a, b)); 
