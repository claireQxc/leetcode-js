/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length;
  if(len === 0) return 0;
  if(len === 1) return nums[0];
  if(len === 2) return Math.max(nums[0], nums[1]);
  let max = nums[0];
  nums[1] = Math.max(nums[0], nums[1]);
  robsub(nums, 2, max);
  return nums[len - 1];
};
function robsub(nums, curIdx, max) {
  if(curIdx < nums.length) {
    nums[curIdx] = Math.max(nums[curIdx] + max, nums[curIdx - 1]);
    max = Math.max(max, nums[curIdx - 1]);
    robsub(nums, curIdx + 1, max);
  } else {
    return;
  }
}

rob([1,2,3,1]);
// @lc code=end

