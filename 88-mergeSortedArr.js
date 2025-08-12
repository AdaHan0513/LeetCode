// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

function mergeSortedArray(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2)
    return nums1.sort((a, b) => a - b)
}

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

console.log(mergeSortedArray(nums1, m, nums2, n));