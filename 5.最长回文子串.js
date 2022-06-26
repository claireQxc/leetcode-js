/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0;
  let end = 0;
  if (s.length < 1) {
    return  '';
  }
  for (let i = 0; i < s.length; i++) {
    let oddLen = expandAround(s, i, i);
    let evenLen = expandAround(s, i, i + 1);
    let max = Math.max(oddLen, evenLen);
    if (max > end - start) {
      start = i - ((max - 1) >> 1);
      end = i + (max >> 1);
    }
  }
  return s.substring(start, end + 1);
};

var expandAround = (s, start, end) => {
  let stringLen = s.length;
  while (start >= 0 && end < stringLen && s.charAt(start) === s.charAt(end)) {
    start--;
    end++;
  }
  return end - start - 1;
}

longestPalindrome('cbbd')
// @lc code=end

