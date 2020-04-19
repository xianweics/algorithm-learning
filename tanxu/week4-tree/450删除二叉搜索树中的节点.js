var deleteNode = function(root, key) {
    if (!root) return null
    if (root.val === key) {
        return delRoot(root)
    } else {
        findAndDelNode(root,key)
        return root
    }
};


function findAndDelNode(node, key) {
    if (node.left) {
        if (node.left.val === key) {
            delNode(node.left, node, true)
            return
        } else {
            findAndDelNode(node.left,key)
        }
    }
    if (node.right) {
        if (node.right.val === key) {
            delNode(node.right,node, false)
            return
        } else {
            findAndDelNode(node.right,key)
        }
    }
}

function delNode(node,parent,isLeft) {
    if (!node.left && !node.right)
    {
        if (isLeft) {
            parent.left = null
        } else {
            parent.right = null
        }
        return;
    }
    let rightestNode = null
    if (isLeft) {
        if (node.left) {
            parent.left = rightestNode = node.left
        } else {
            parent.left = rightestNode = node.right
            return;
        }
    } else {
        if (node.left) {
            parent.right = rightestNode = node.left
        } else {
            parent.right = rightestNode = node.right
            return;
        }
    }

    while(rightestNode.right) {
        rightestNode = rightestNode.right
    }
    rightestNode.right = node.right
    node = null
}

function delRoot(root) {
    if (root.left === null) return root.right
    let result = root.left
    let node = root.left
    while(node.right) {
        node = node.right
    }
    node.right = root.right
    return result
}
