/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let result = 0;
  let dp =[];
  dp[0] = 1;
  dp[1] = 2;
  if (n === 0) return result;
  if (n === 1) return 1;
  if (n === 2) return 2;
  for ( let i = 2; i < n; i++) {
    result = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = result;
  }
  return result;
};

