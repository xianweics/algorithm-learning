/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
	if (original === null) {
		return null
	}
  if (original === target) {
    return cloned
  }
  return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target)
};
var tree = [7,4,3,null,null,6,19], target = 3;


var val = getTargetCopy(tree,target);
console.log('val', val);

//时间复杂度O(n)



