/**
 * 字符串全排列
 */

function fullPermutation(str) {
  const ro = [];
  const iterate = function(str, current) {
    if (str.length === 0) {
      if (ro.indexOf(current) === -1) {
        ro.push(current);
      }
    }
    for (let i = 0; i < str.length; i++) {
      const newStr = `${str.substring(0, i)}${str.substring(i + 1)}`;
      // remove current char from possibilities then concat current string
      iterate(newStr, `${current}${str.charAt(i)}`);
    }
  }

  iterate(str, "");

  return ro;
}

console.log(fullPermutation("abc"));
console.log(fullPermutation("abcd"));
console.log(fullPermutation("aaa"));