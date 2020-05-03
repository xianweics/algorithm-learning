/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) return []
    const result = []
    _serialize([root], result)
    return result
};

function _serialize(thisFloor, result) {
    let nextFloor = []
    for (let i = 0; i < thisFloor.length; i++) {
        result.push(thisFloor[i] ? thisFloor[i].val : null)
        if (thisFloor[i]) {
            nextFloor.push(thisFloor[i].left)
            nextFloor.push(thisFloor[i].right)
        }
    }
    if (nextFloor.length > 0 && !isAllNull(nextFloor)) {
        _serialize(nextFloor, result)
    }
}

function isAllNull(ary) {
    for (let i = 0; i < ary.length; i++) {
        if (ary[i]) {
            return false
        }
    }
    return true
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length === 0) return null
    const root = new TreeNode(data[0])
    data.shift()
    _deserialize([root], data)
    return root
};

function _deserialize(thisFloor, data) {
    const nextFloor = []
    for (let i = 0; i < thisFloor.length; i++) {
        if (thisFloor[i] !== null) {
            thisFloor[i].left = isNone(data[0]) ?  null : new TreeNode(data[0])
            data.shift()
            nextFloor.push(thisFloor[i].left)
            thisFloor[i].right = isNone(data[0]) ?  null : new TreeNode(data[0])
            data.shift()
            nextFloor.push(thisFloor[i].right)
        }
    }
    if (data.length > 0) {
        _deserialize(nextFloor, data)
    }
}

function isNone(val) {
    return val === null || val === undefined
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1)
let node2 = root.left = new TreeNode(2)
let node3 = root.right = new TreeNode(3)
let node4 = node3.left = new TreeNode(4)
let node5 = node3.right = new TreeNode(5)
let node6 = node5.right = new TreeNode(6)
console.log(serialize(root))


console.log(deserialize([
    1,    2,    3, null,
    null, 4,    5
]))
