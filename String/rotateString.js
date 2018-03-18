/**
 * 旋转字符串
 */

function reverse(str) {
  return str.split("").reverse().join("");
}

function rotateString(str, start, end) {
  const first = str.substring(start, end + 1);
  const second = `${str.substring(0, start)}${str.substring(end + 1)}`;

  return reverse(`${reverse(first)}${reverse(second)}`);
}

console.log(rotateString("abcdef", 0, 2));
console.log(rotateString("abcdef", 1, 2));
console.log(rotateString("abcdef", 2, 4));