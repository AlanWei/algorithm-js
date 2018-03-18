/**
 * 回文判断
 */

/**
* Array way in JavaScript
*/
// function isPalinDrome(str) {
//   return str.split("").reverse().join("") === str;
// }

/**
 * 
 */

function isPalinDrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start) === str.charAt(end)) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalinDrome("abcba"));
console.log(isPalinDrome("abcbaffnsd"));