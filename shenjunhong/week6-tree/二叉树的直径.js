/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let res = 0;

  function depth(node) {
      if (!node) {
          return 0;
      }
      const left = depth(node.left);
      const right = depth(node.right);
      res = Math.max(res, left + right);
      return Math.max(left, right) + 1;
  }

  depth(root);
  
  return res;
};

const val  = depth([1,2,3,4,5])
console.log('val: ', val);

//时间复杂度o(n)
