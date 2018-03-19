/**
 * 寻找和为定值的 N 个数
 */

function nSumEqual(nums, n, target) {
  const ro = [];

  const check = function(nums, n, target, current) {
    if (nums <= 0 || n <= 0) {
      return;
    }
    if (n === 1 && nums.length === 1 && nums[0] === target) {
      return ro.push(current.concat(nums[0]));
    }
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.slice(0, i).concat(nums.slice(i + 1));
      check(newNums, n - 1, target - nums[i], current.concat(nums[i]));
      check(newNums, n, target, current);
    }
  }

  check(nums, n, target, []);

  return ro;
}

console.log(nSumEqual([1, 2, 3, 4, 5], 3, 6));