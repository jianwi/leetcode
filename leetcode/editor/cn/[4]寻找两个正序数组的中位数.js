//给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。 
//
// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。 
//
// 你可以假设 nums1 和 nums2 不会同时为空。 
//
// 
//
// 示例 1: 
//
// nums1 = [1, 3]
//nums2 = [2]
//
//则中位数是 2.0
// 
//
// 示例 2: 
//
// nums1 = [1, 2]
//nums2 = [3, 4]
//
//则中位数是 (2 + 3)/2 = 2.5
// 
// Related Topics 数组 二分查找 分治算法 
// 👍 3187 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
[1, 2, 3, 4]
var findMedianSortedArrays = function (nums1, nums2) {
    let mid = NaN
    let combine_arr = [...nums1, ...nums2]
    // 先排个序
    combine_arr.sort((l, r) => r - l)
    console.log(combine_arr)
    // 判断是否为偶数
    if (combine_arr.length % 2 === 0) {
        //    偶数情况
        //    寻找中间两个数的索引
        let index_left = combine_arr.length / 2 - 1
        let index_right = index_left + 1
        mid = (combine_arr[index_left] + combine_arr[index_right]) / 2
    } else {
        //    奇数情况
        let index = (combine_arr.length - 1) / 2
        console.log(index)
        mid = combine_arr[index]
    }
    console.log(mid)
    return mid
};

//leetcode submit region end(Prohibit modification and deletion)
findMedianSortedArrays([1, 3], [2])