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
  //用递归的思想，将左边的值加起来
  if (!root) return 0
  let sum = 0
  let stack = []
  stack.push([root, false])   // 栈用于保存某节点及该节点是否为左子节点
  while (stack.length) {
      let [node, isLeft] = stack.pop()
      if (isLeft && !node.left && !node.right) sum += node.val    // 找到左子节点，累加
      if (node.left) stack.push([node.left, true])
      if (node.right) stack.push([node.right, false])
  }

  return sum
};


const arr = [3,9,20,null,null,15,7];
const val = sumOfLeftLeaves(arr);
console.log('val: ', val);

//时间复杂度o(n)

