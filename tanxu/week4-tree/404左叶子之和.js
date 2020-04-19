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
var sumOfLeftLeaves = function(root) {
    let result = [0]
    if (root) {
        _sumOfLeftLeaves(root, result)
    }
    return  result[0]
};

function _sumOfLeftLeaves(root, result) {
    if (root.left) {
        if(root.left.left === null && root.left.right === null) {
            result[0] += root.left.val
        }
        _sumOfLeftLeaves(root.left, result)
    }
    if (root.right) {
        _sumOfLeftLeaves(root.right, result)
    }
}
