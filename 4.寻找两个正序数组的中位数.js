/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let la = nums1.length, lb = nums2.length;
  let len = la + lb;
  let p1 = 0, p2 = 0;
  let left = -1, right = -1;
  for (let i = 0; i <= len / 2; i++) {
    left = right;
    if (p1 < la && (p2 >= lb || nums1[p1] < nums2[p2])) {
      right = nums1[p1++];
    } else {
      right = nums2[p2++];
    }
  }
  if((len & 1) === 0) {
    return (left + right) / 2.0;
  } else {
    return right;
  }
};
// @lc code=end

