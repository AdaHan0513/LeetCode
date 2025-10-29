// https://leetcode.cn/problems/plus-one/

function plusOne(nums) {
    for (let i = nums.length-1; i >= 0; i--) {
        nums[i]++
        if (nums[i] < 10) {
            return nums
        }
        nums[i] = 0
    }
    nums.unshift(1)
    return nums
}

let res1 =plusOne([1,2,3])      // [ 1, 2, 4 ]
console.log(res1);

let res2 = plusOne([9,9])       // [ 1, 0, 0 ]
console.log(res2);

