/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let len = nums.length;
  let dp = Array.from({length: len}).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for(let i = 0; i < len - 1; i++) {
    let maxSteps = nums[i];
    for(let j = 0; j < maxSteps && i + j + 1 < len; j++) {
      dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i] + 1);
    }
  }
  return dp[len - 1];
};
// @lc code=end

