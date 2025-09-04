// https://leetcode.cn/problems/group-anagrams/?envType=study-plan-v2&envId=top-100-liked

function groupAnagrams(strs) {
    let map = new Map()
    for (let char of strs) {
        let key = char.split('').sort().join('')
        console.log(key);
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(char)
    }
    return Array.from(map.values())
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs));
