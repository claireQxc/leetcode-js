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
  let len1 = nums1.length;
  let len2 = nums2.length;
  let isOdd = (len1 + len2) % 2;
  let mid = (len1 + len2) >> 1;
  let i = 0;
  let j = 0;
  let orderedArr = [];
  while (i + j <= mid) {
    if (i < len1 && j < len2) {
      if (nums1[i] < nums2[j]) {
        orderedArr.push(nums1[i]);
        i++;
      } else {
        orderedArr.push(nums2[j]);
        j++;
      }
    }
    if (i === len1) {
      orderedArr.push(nums2[j]);
      j++;
    }
    if (j === len2) {
      orderedArr.push(nums1[i]);
      i++;
    }
  }
  if(isOdd) {
    return orderedArr[mid];
  } else {
    return (orderedArr[mid - 1] + orderedArr[mid]) / 2;
  }
};
// @lc code=end

