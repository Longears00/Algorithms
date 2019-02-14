class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value) {
        let newNode = new Node(value)
        if (!this.top) {
            this.top = newNode
            this.bottom = newNode
        } else {
            let temp = this.top
            this.top = newNode
            this.top.next = temp
        }
        this.length++
        this.printList()
    }
    pop() {
        if (this.top) {
            let temp = this.top
            this.top = this.top.next
            this.length--
            console.log(temp);
        }
        this.printList()
    }
    isEmpty() {
        return this.top ? true : false
    }

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

const myStack = new Stack();
myStack.push('google')
myStack.push('Udemy')
myStack.push('Discord')


myStack.pop()



//Discord
//Udemy
//google