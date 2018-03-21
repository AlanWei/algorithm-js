/**
 * 二分查找法
 */

function binarySearch(nums, target, currentIdx) {
  const middle = Math.floor((nums.length - 1) / 2);
  if (nums[middle] < target) {
    return binarySearch(nums.slice(middle + 1), target, currentIdx + middle + 1);
  }
  if (nums[middle] > target) {
    return binarySearch(nums.slice(0, middle), target, 0);
  }
  if (nums[middle] === target) {
    return currentIdx + middle;
  }
  return -1;
}

console.log(binarySearch([], 1, 0));
console.log(binarySearch([1], 1, 0));
console.log(binarySearch([1, 2], 2, 0));
console.log(binarySearch([1, 2, 3, 4, 5], 6, 0));
console.log(binarySearch([1, 2, 3, 4, 5], 4, 0));
console.log(binarySearch([1, 2, 3, 4, 5], 2, 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9, 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 0));