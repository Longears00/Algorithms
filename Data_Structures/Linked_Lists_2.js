function LinkedList() {
	this.head = null
	this.tail = null
}
function Node(value, next, prev) {
	this.value = value
	this.next = next
	this.prev = prev
}
LinkedList.prototype.addToHead = function(value) {
	var newNode = new Node(value, this.head, null)
	if (this.head) {
		this.head.prev = newNode
	} else {
		this.tail = newNode
	}
	this.head = newNode
	return this.head
}

LinkedList.prototype.addToTail = function(value) {
	var newNode = newNode(value, null, this.tail)
	if (this.tail) {
		this.tail.next = newNode
	} else {
		this.head = newNode
	}
	this.tail = newNode
	return this.tail
}

LinkedList.prototype.removeHead = function() {
	if (!this.head) {
		return null
	}
	var headValue = this.head.value
	this.head = this.head.next
	if (this.head) {
		this.head.prev = null
	} else {
		this.tail = null
	}
	return headValue
}
LinkedList.prototype.removeTail = function() {
	if (!this.tail) {
		return null
	}
	let tailValue = this.tail.value
	this.tail = this.tail.prev
	if (this.tail) {
		this.tail.next = null
	} else {
		this.head = null
	}
	return tailValue
}

LinkedList.prototype.search = function(searchValue) {
	if (!this.head) {
		return null
	}
	let currentNode = this.head
	while (currentNode) {
		if (currentNode.value === searchValue) {
			return currentNode
		}
		currentNode = currentNode.next
	}
	return null
}
LinkedList.prototype.indexOf = function(value) {
	let currentIndex = 0
	let indexList = []
	if (!this.head) {
		return null
	}
	let currentNode = this.head
	while (currentNode) {
		if (currentNode.value === value) {
			indexList.push(currentIndex)
		}
		currentIndex++
		currentNode = currentNode.next
	}
	return indexList
}
