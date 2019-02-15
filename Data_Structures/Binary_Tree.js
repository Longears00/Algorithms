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
    remove(value) {
        let currentNode = this.root
        let parentNode = null
        while (currentNode) {
            if (currentNode.value > value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (currentNode.value <= value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                let removeValue = currentNode.value
                //not right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        } else {
                            parentNode.right = currentNode.left
                        }
                    }
                }
                //has right child ,but right child has not left child
                else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.right
                    } else {
                        currentNode.right.left = currentNode.left
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right
                        } else {
                            parentNode.right = currentNode.right
                        }
                    }
                }
                //has right child and right child has left child
                else {

                }
                return removeValue
            }
        }
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