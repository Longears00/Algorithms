//Link list
function LinkedList() {
    let length = 0
    let head = null
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    this.size = function () {
        return length
    }

    this.head = function () {
        return head
    }

    this.add = function (element) {
        let nodeTemplate = new Node(element)
        if (head === null) {
            head = nodeTemplate
            console.log('head ', head)
        } else {
            let currentNode = head

            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = nodeTemplate
        }
        length++
    }

    this.remove = function (element) {
        let currentNode = head
        let previousNode = null
        if (currentNode.element === element) {
            head = currentNode.next
            length--
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode
                currentNode = currentNode.next
                previousNode.next = currentNode.next
            }
            length--
        }

    }
    this.indexOf = function (element) {
        let currentNode = head
        let index = -1
        while (currentNode) {
            index++
            if (currentNode.element === element) {
                return index
            }
            currentNode = currentNode.next
        }
        return -1
    }
    this.elementAt = function (index) {
        let currentNode = head
        let count = 0
        while (count < index) {
            count++
            currentNode = currentNode.next
        }
        return currentNode.element
    }

    this.addAt = function (index, element) {
        let nodeTemplate = new Node(element)

        let currentNode = head
        let previousNode = null
        let currentIndex = 0

        if (index > length) {
            return false
        }
        if (index === 0) {
            nodeTemplate.next = currentNode
            head = nodeTemplate
        } else {
            while (currentIndex < index) {
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            nodeTemplate.next = currentNode
            previousNode.next = nodeTemplate
        }
        length++
    }
}

var myLinkList = new LinkedList()
myLinkList.add('cat')
myLinkList.add('dog')
myLinkList.add('fish')