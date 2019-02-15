class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (currentNode) {
                if (currentNode.value > value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        break
                    }
                    currentNode = currentNode.left
                } else if (currentNode.value <= value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        break
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup(value) {
        let currentNode = this.root
        while (currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left
            } else if (currentNode.value <= value) {
                currentNode = currentNode.right
            } else {
                return currentNode
            }
        }
        return 'can not find'
    }
}

let tree = new BinaryTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(1))
//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = {
        value: node.value
    }
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}