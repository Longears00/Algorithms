class Node {
    constructor(value) {
        this.previous = null
        this.value = value
        this.next = null
    }
}

class DoublyLinkList {
    constructor(value) {
        this.head = {
            previous: null,
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let newNode = new Node(value)
        this.tail.next = newNode
        newNode.previous = this.tail
        this.length++
        myDoublyLinkList.printList()
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode
        this.length++
        myDoublyLinkList.printList()
    }
    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)

    }
}

let myDoublyLinkList = new DoublyLinkList(1)
myDoublyLinkList.printList()
myDoublyLinkList.append(2)
myDoublyLinkList.prepend(0)