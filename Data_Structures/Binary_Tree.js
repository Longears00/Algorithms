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
                if (currentNode.left === null && currentNode.right === null) {
                    currentNode.value = null
                } else if (currentNode.left === null) {
                    if (parentNode.left === currentNode.value) {
                        parentNode.left = currentNode.right
                    } else {
                        parentNode.right = currentNode.right
                    }
                } else if (currentNode.right === null) {
                    if (parentNode.left === currentNode.value) {
                        parentNode.left = currentNode.left
                    } else {
                        parentNode.right = currentNode.left
                    }
                } else if (currentNode.left && currentNode.right) {
                    let tempNode = currentNode.right
                    if (currentNode.right.left !== null) {
                        currentNode.right.left.right = tempNode
                        if (parentNode.left === currentNode.value) {
                            parentNode.left = currentNode.right.left
                        } else {
                            parentNode.right = currentNode.right.left
                        }

                    } else {
                        if (parentNode.left === currentNode.value) {
                            parentNode.left = currentNode.left
                        } else {
                            parentNode.right = currentNode.left
                        }
                    }
                }
                return removeValue
            }
        }
    }

    breathFirstSearch() {
        let currentNode = this.root
        let listResult = []
        //keep trace
        let queue = []
        queue.push(currentNode)

        while (queue.length > 0) {
            currentNode = queue.shift()

            listResult.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {

                queue.push(currentNode.right)
            }
        }

        console.log(listResult);
    }
    breathFirstSearchR(queue, list) {
        if (queue.length === 0) {
            return list
        }
        let currentNode = queue.shift()
        listResult.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
        return this.breathFirstSearchR(queue, list)
    }
    deepFirstSearchRInOrder(node, list) {
        if (node.left) {
            this.deepFirstSearchRInOrder(node.left, list)
        }
        list.push(node.value)
        if (node.right) {
            this.deepFirstSearchRInOrder(node.right, list)
        }
        return list
    }

    deepFirstSearchRPreOrder(node, list) {

        list.push(node.value)
        if (node.left) {
            this.deepFirstSearchRPreOrder(node.left, list)
        }
        if (node.right) {
            this.deepFirstSearchRPreOrder(node.right, list)
        }
        return list
    }

    deepFirstSearchRPostOrder(node, list) {


        if (node.left) {
            this.deepFirstSearchRPostOrder(node.left, list)
        }
        if (node.right) {
            this.deepFirstSearchRPostOrder(node.right, list)
        }
        list.push(node.value)
        return list
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
// tree.breathFirstSearch()
//tree.breathFirstSearchR([tree.root], [])

console.log(tree.deepFirstSearchRInOrder(tree.root, []))

console.log(tree.deepFirstSearchRPreOrder(tree.root, []));

console.log(tree.deepFirstSearchRPostOrder(tree.root, []));

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