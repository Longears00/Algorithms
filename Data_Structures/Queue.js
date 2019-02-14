class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        this.printList()
    }
    dequeue() {
        if (this.first.next) {
            this.first = this.first.next
        } else {
            this.first = null
            this.last = null;
        }
        this.length--
        this.printList()
    }
    //isEmpty;

    printList() {
        const array = []
        let currentNode = this.top
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array);
    }
}

const myQueue = new Queue();


//Joy
//Matt
//Pavel
//Samir