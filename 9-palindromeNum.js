// https://leetcode.cn/problems/palindrome-number/description/
// 回文数
// 1-字符串反转法
function isPalindrome(x) {
    let str = x.toString(); // 将数字转换为字符串
    let y = str.split('').reverse().join(''); // 反转字符串
    return str === y; // 比较原字符串和反转后的字符串是否相等
}
console.log(isPalindrome(121)); // true

// 2-数字方法，性能快
function isPalindrome2(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false; // 负数或末尾为0的非零数不是回文数
    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === reversed || x === Math.floor(reversed / 10); // 如果原数等于反转数，或者原数等于反转数去掉最后一位的结果，则是回文数
}
console.log(isPalindrome2(121)); // true






