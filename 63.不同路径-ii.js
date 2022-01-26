/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = m > 0 ? obstacleGrid[0].length : 0;
  let dp = Array.from(new Array(m), () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
      } else {
        if(i === 0 && j === 0) {
          dp[i][j] = 1;
        } else if (i === 0 && j > 0) {
          dp[i][j] = dp[i][j - 1];
        } else if (j === 0 && i > 0) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  }
  return dp[m-1][n-1];
};
uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]);
// @lc code=end

