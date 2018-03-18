/**
 * 字符串包含
 */

function containString(a, b) {
  const map = {};
  for (let i = 0; i < a.length; i++) {
    if (map[a.charAt(i)] === undefined) {
      map[a.charAt(i)] = 0;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (map[b.charAt(i)] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(containString("ABDE", "BAD"));
console.log(containString("ABDE", "BFD"));