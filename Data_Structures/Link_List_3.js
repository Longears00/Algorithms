class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head
		this.length = 1
	}

	append(value) {
		const newNode = new Node(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		console.log(this.head)
	}
	prepend(value) {
		const newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		console.log(this.head)
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value)
		}

		let newNode = new Node(value)

		const currentNode = this.traverseToIndex(index - 1)
		let nextValue = currentNode.next
		currentNode.next = newNode
		newNode.next = nextValue
		this.length++

		console.log(this.printList())
	}
	remove(index) {
		if (index >= this.length) {
			return 'index longer than length'
		}
		if (index === 1) {
			let newHead = this.head.next
			this.head = newHead
		} else {
			let preNode = this.traverseToIndex(index - 1)
			let unwantedNode = preNode.next
			preNode.next = unwantedNode.next
		}
		this.length--
		console.log(this.printList())
	}
	traverseToIndex(index) {
		let counter = 0
		let currentNode = this.head

		while (counter !== index) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
	printList() {
		const array = []
		let currentNode = this.head
		while (currentNode !== null) {
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		return array
	}
}

let myLinkList = new LinkList(10)
myLinkList.append(5)
myLinkList.append(16)
myLinkList.prepend(1)
myLinkList.remove(3)
