/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // find the last position
    let i = -1;
    let top = 0;
    let len = arr.length;
    while (top < len) {
      i++;
      top++;
      if(arr[i] === 0) top++;
    }
    // no zero
    if (i === arr.length - 1) return;
    // has zeros
    let j = len - 1;
    if (top > len) {
      arr[j] = 0;
      i--;
      j--;
    }
    while (j > 0 && i !== j) {
      arr[j] = arr[i];
      if (arr[i] === 0) {
        j--;
        arr[j] = 0;
      }
      i--; 
      j--;
    }
};
// @lc code=end

