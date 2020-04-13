/**
 * 内存消耗：34.1MB
 * 执行时间：72ms
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
var sumOfLeftLeaves = function(root) {

  let sum = 0;
  if (!root) return sum;


  const loop = (node)=>{
      if (node.left){
          loop(node.left);
          if (!node.left.left && !node.left.right){
              sum += node.left.val
          }
      }
      if (node.right){
          loop(node.right);
      }
  }
  loop(root);
  return sum;
};