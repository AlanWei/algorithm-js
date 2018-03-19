/**
 * 最大连续子数组和
 */

function largestSubArraySum(nums) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = nums[i] > currentSum + nums[i] ? nums[i] : currentSum + nums[i];
    maxSum = currentSum > maxSum ? currentSum : maxSum;
  }

  return maxSum;
}

console.log(largestSubArraySum([1, -2, 3, 10, -4, 7, 2, -5]));