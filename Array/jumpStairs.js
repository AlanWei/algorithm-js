/**
 * 一个台阶总共有 n 级，如果一次可以跳 1 级，也可以跳 2 级。
 * 求总共有多少总跳法。
 */

function jumpStairs(n) {
  const ro = [1, 1];

  for (let i = 2; i <= n; i++) {
    ro[i] = ro[i - 1] + ro[i - 2];
  }

  return ro[n];
}

console.log(jumpStairs(0));
console.log(jumpStairs(1));
console.log(jumpStairs(2));
console.log(jumpStairs(3));
console.log(jumpStairs(4));
console.log(jumpStairs(5));