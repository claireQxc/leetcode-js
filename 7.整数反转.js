/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MINUS = '-';
  const MIN = Math.pow(2, 31) * -1;
  const MIN_LENGTH = String(MIN).length;
  const MAX = Math.pow(2, 31) - 1;
  const MAX_LENGTH = String(MAX).length;
  let arr = x.splice('');
  let isMinus = arr.indexOf(MINUS) >= 0;
  if (isMinus) {
    arr.shift();
  }
  arr = arr.reverse();
  if (isMinus) {
    if (arr.length + 1 > MIN_LENGTH
      || (arr.length + 1 === MIN_LENGTH && arr[0]))
  } else {
    return 
  }
};
// @lc code=end

