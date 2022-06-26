/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const res = [];
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let delta = target - nums[i];
    if (numsMap.has(delta)) {
      res.push(i);
      res.push(numsMap.get(delta));
      break;
    }
    numsMap.set(nums[i], i);
  }
  return res;
};
// @lc code=end

