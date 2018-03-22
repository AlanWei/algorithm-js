/**
 * 交替字符串
 * 输入三个字符串s1、s2和s3，判断第三个字符串s3是否由前两个字符串s1和s2交错而成，即不改变s1和s2中各个字符原有的相对顺序。
 * 例如当s1 = “aabcc”，s2 = “dbbca”，s3 = “aadbbcbcac”时，则输出true，但如果s3=“accabdbbca”，则输出false。
 */

function swapString(str1, str2, str3) {
  if (str3.length !== str1.length + str2.length) {
    return false;
  }
  let dp = [];
  for (let i = 0; i <= str1.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= str2.length; j++) {
      // empty string could be combined by two empty string
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (
        i - 1 >= 0 && dp[i - 1][j] && str1.charAt(i - 1) === str3.charAt(i + j - 1) ||
        j - 1 >= 0 && dp[i][j - 1] && str2.charAt(j - 1) === str3.charAt(i + j - 1)
      ) {
        dp[i][j] = true;
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[str1.length][str2.length];
}

console.log(swapString("", "", ""));
console.log(swapString("b", "a", "ab"));
console.log(swapString("ba", "", "ba"));
console.log(swapString("bc", "ba", "bbac"));
console.log(swapString("aabcc", "dbbca", "aadbbcbcac"));
console.log(swapString("aabcc", "dbbca", "aadbccbbca"));
console.log(swapString("aabcc", "dbbca", "dbbaabccca"));
console.log(swapString("aabcc", "dbbca", "accabdbbca"));
console.log(swapString("aabcc", "dbbca", "adbbcaccab"));