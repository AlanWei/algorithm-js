/**
 * 最长回文子串
 */

function longestPalindromeSubstring(str) {
  let max = 0;
  // enumerate middle point of longest palindrome substring
  for (let i = 0; i < str.length; i++) {
    let tempLongest = 0;
    // for odd case
    for (let j = 0; (j <= i && j + i < str.length); j++) {
      if (str.charAt(i - j) !== str.charAt(i + j)) {
        break;
      }
      tempLongest = j * 2 + 1;
    }
    if (tempLongest > max) {
      max = tempLongest;
    }
    // for even case
    for (let j = 0; (j <= i && j + i + 1 < str.length); j++) {
      if (str.charAt(i - j) !== str.charAt(i + j + 1)) {
        break;
      }
      tempLongest = j * 2 + 2;
    }
    if (tempLongest > max) {
      max = tempLongest;
    }
  }

  return max;
}

console.log(longestPalindromeSubstring("sabcdsdcbae"));
console.log(longestPalindromeSubstring("sabcddcbae"));
console.log(longestPalindromeSubstring("aba"));
console.log(longestPalindromeSubstring("bb"));