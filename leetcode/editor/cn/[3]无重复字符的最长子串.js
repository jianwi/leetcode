//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。 
//
// 示例 1: 
//
// 输入: "abcabcbb"
//输出: 3 
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 
//
// 示例 2: 
//
// 输入: "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 
//
// 示例 3: 
//
// 输入: "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 
// Related Topics 哈希表 双指针 字符串 Sliding Window 
// 👍 4317 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
//　维护窗口法

var lengthOfLongestSubstring = function (s) {
    let arr = []
    //维护一个最长字符串长度
    let max = 0
    for (let i = 0; i < s.length; i++) {
        //            判断一下 char 有没有在数组里面
        let char = s.substr(i, 1)
        //　如果数组里面没有当前的字符
        if (!arr.includes(char)) {
            //　判断是不是最后一个字符，如果是则
            if (i === s.length - 1) {
                max = max > arr.length + 1 ? max : arr.length + 1
            }
        } else {
            //　重复了，更新一下最大值
            max = max > arr.length ? max : arr.length
            // 如果重复了，删除（索引最小的）重复值
            let min_index = arr.indexOf(char)
            // 从数组的开始删除，一直删除到索引的位置（包含索引处的值）
            arr.splice(0, min_index + 1)
        }
        arr.push(char)
    }

    return max
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(lengthOfLongestSubstring("dvdf"))
