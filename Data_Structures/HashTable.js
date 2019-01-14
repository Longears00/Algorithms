function HashTable(size) {
	this.buckets = Array(size)
	this.numBuckets = this.buckets.length
}

function HashNode(key, value, next) {
	this.key = key
	this.value = value
	this.next = next || null
}

HashTable.prototype.hash = function(key) {
	var total = 0
	for (var i = 0; i < key.length; i++) {
		total += key.charCodeAt(i)
	}
	console.log(total)
	return total % this.numBuckets
}

HashTable.prototype.insert = function(key, value) {
	var index = this.hash(key)
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value)
	} else if (this.buckets[index].key === key) {
		this.buckets[index].value = value
	} else {
		var currentNode = this.buckets[index]

		while (currentNode.next) {
			if (currentNode.next.key === key) {
				currentNode.next.value = value
				return
			}
			currentNode = currentNode.next
		}
		currentNode.next = new HashNode(key, value)
	}
}

HashTable.prototype.get = function(key) {
	var index = this.hash(key)
	if (!this.buckets[index]) {
		return null
	} else {
		var currentNode = this.buckets[index]
		while (currentNode) {
			if (currentNode.key === key) {
				return currentNode
			}
			currentNode = currentNode.next
		}
		return null
	}
}

HashTable.prototype.retrieveAll = function() {
	var length = this.numBuckets
	var buckets = []
	for (var i = 0; i < length; i++) {
		var currentNode = this.buckets[i]
		while (currentNode) {
			if (currentNode) {
				buckets.push(currentNode)
			}
			currentNode = currentNode.next
		}
	}
	return buckets
}

var myHashTable = new HashTable(30)
myHashTable.insert('Dean', 'dean')
myHashTable.insert('Megan', 'megan')
myHashTable.insert('Dane', 'dane')
myHashTable.insert('Dean', 'dean111')
console.log(myHashTable.get('Dane'))
