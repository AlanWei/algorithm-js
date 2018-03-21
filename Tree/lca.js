/**
 * 求有根树的任意两个节点的最近公共祖先（Lowest Common Ancestor）。
 */

function lca(tree, node1, node2) {
  let left = node1.value;
  let right = node2.value;
  if (left > right) {
    const temp = left;
    left = right;
    right = temp;
  }

  while (true) {
    if (tree.value < left) {
      tree = tree.right;
    } else if (tree.value > right) {
      tree = tree.left;
    } else {
      return tree;
    }
  }
}