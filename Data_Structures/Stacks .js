//stacks last in first out . push in pop out  peek just look 

var letters = [] //this is our stack
var word = "racecar"
var rword = ""

//using array for stacks

//put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
}

console.log(letters)

//pop off the stack in reverse order 
for (let i = 0; i < word.length; i++) {
    rword += letters.pop()
}

console.log(rword)

if (rword === word) {
    console.log(word + ' is a palindrome');
} else {
    console.log(word + ' is not a palindrome');
}

//function stack
let stackFunction = function () {
    this.stackList = []
    this.count = 0

    this.push = function (value) {
        this.stackList[this.count] = value
        this.count++
        return value
    }

    this.pop = function () {
        if (this.count === 0) {
            return undefined
        }
        let popResult = this.stackList[this.count - 1]
        delete this.stackList[this.count - 1]
        this.count--
        return popResult
    }

    this.size = function () {
        return this.count
    }

    this.peek = function () {
        return this.stackList[this.count - 1]
    }
}

var myStack = new stackFunction()
myStack.push(1)
myStack.push(2)

console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())