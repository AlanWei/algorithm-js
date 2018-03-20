/**
 * 奇偶调序
 * 输入一个整数数组，调整数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

function orderOddEven(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] % 2 !== 0) {
      start++;
    } else if (nums[end] % 2 === 0) {
      end--;
    } else {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
    }
  }

  return nums;
}

console.log(orderOddEven([1, 3, 4, 6, 5, 7, 4, 2, 1, 9]));