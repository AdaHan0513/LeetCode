// https://leetcode.cn/problems/two-sum/description/
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];  // 返回两个数的索引
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 13)); // [0, 2]

function twoSum2(nums, target) {
    let map = new Map();
    for(let i =0;i<nums.length;i++){
        let bushu = target-nums[i];
        if(map.has(bushu)){
            return [map.get(bushu), i]; // 返回两个数的索引
        }
        map.set(nums[i], i); // 将当前数字和其索引存入map
    }
    return []; // 如果没有找到，返回空数组
}
console.log(twoSum2([2, 7, 11, 15], 13)); // [0, 2]

