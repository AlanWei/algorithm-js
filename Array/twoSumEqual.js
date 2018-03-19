/**
 * 寻找和为定值的两个数
 */

function twoSumEqaul(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const ro = [];
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === target) {
      ro.push([nums[start], nums[end]]);
      start++;
      end--;
    }
    if (sum > target) {
      end--;
    }
    if (sum < target) {
      start++;
    }
  }
  return ro;
}

console.log(twoSumEqaul([1, 7, 3, 5, 10, 15, 0], 15));