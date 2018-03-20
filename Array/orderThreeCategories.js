/**
 * 荷兰国旗
 * 现有n个红白蓝三种不同颜色的小球，乱序排列在一起，请通过两两交换任意两个球，使得从左至右，依次是一些红球、一些白球、一些蓝球。
 */

function orderThreeCategories(nums) {
  let start = 0;
  let end = nums.length - 1;
  let current = 0;

  while (current <= end) {
    if (nums[current] === 0) {
      console.log(nums[current]);
      const temp = nums[start];
      nums[start] = nums[current];
      nums[current] = temp;
      current++;
      start++;
    } if (nums[current] === 1) {
      console.log(nums[current]);
      const temp = nums[start];
      current++;
    } if (nums[current] === 2) {
      console.log(nums[current]);
      const temp = nums[end];
      nums[end] = nums[current];
      nums[current] = temp;
      end--;
    }
  }

  return nums;
}

console.log(orderThreeCategories([2, 1, 0, 0, 2, 1, 2, 1, 0, 2, 1]));