/**
 * 快速排序
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  const newArr = arr.slice(0, middle).concat(arr.slice(middle + 1));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < arr[middle]) {
      left.push(newArr[i]);
    } else {
      right.push(newArr[i]);
    }
  }

  return quickSort(left).concat(arr[middle]).concat(quickSort(right));
}

console.log(quickSort([3, 1, 2, 4]));
console.log(quickSort([85, 24, 63, 15, 17, 19, 20, 9]));