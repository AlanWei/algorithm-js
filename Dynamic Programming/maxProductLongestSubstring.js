/**
 * 最大连续乘积子串
 * 给一个浮点数序列，取最大乘积连续子串的值，例如 -2.5，4，0，3，0.5，8，-1，则取出的最大乘积连续子串为3，0.5，8。
 * 也就是说，上述数组中，3 0.5 8这3个数的乘积 3 0.5 8 = 12是最大的，而且是连续的。
 * 因为负数的存在，我们既要记录最大积，也要记录最小积（小于零时最大）
 */

function maxProductLongestSubstring(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let maxEnd = nums[0];
  let minEnd = nums[0];
  let maxResult = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    const tempMaxEnd = maxEnd * nums[i];
    const tempMinEnd = minEnd * nums[i];
    maxEnd = Math.max(Math.max(tempMaxEnd, tempMinEnd), nums[i]);
    minEnd = Math.min(Math.min(tempMaxEnd, tempMinEnd), nums[i]);
    maxResult = Math.max(maxResult, maxEnd);
  }

  return maxResult;
}

console.log(maxProductLongestSubstring([-2.5, 4, -1, 20, 0, 3, 0.5, 8, -2, -1, 4, -1]));