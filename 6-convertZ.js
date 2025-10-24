// https://leetcode.cn/problems/zigzag-conversion/?envType=study-plan-v2&envId=top-interview-150

function convert(s, numRows) {
    let n = s.length
    if (numRows === 1 || n <= numRows) return s
    let rows = new Array(Math.min(numRows, n)).fill('')
    let curRow = 0
    let goingDown = false
    for (let c of s) {
        rows[curRow] += c
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown
        curRow += goingDown ? 1 : -1
    }
    return rows.join('')
}

console.log(convert("PAYPALISHIRING", 3)) // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)) // "PINALSIGYAHRPI"
console.log(convert("A", 1)) // "A"