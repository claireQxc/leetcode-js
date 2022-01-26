/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let length = s.length;
  let dp = Array.from({length: length + 1}).fill(0);
  dp[0] = s.charAt(0) > 0 ? 1 : 0;
  for (let i = 1; i <= length; i++) {
    let cur = s.charAt(i);
    let pre = s.charAt(i - 1);
    if (cur !== '0') {
      dp[i] += dp[i - 1];
    }
    if (i > 1 && pre != '0' && ((pre - '0') * 10 + (cur - '0') <= 26)) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[length];
};
// @lc code=end

