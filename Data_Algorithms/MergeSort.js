//mergesort top-down implementation

function mergeSortTopDown(array) {
    let count = array.length
    if (count < 2) {
        return array
    }
    let middle = Math.floor(count / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}

function mergeTopDown(left, right) {

    let newArray = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            newArray.push(left.shift())
        } else {
            newArray.push(right.shift())
        }
    }
    return newArray.concat(left.slice()).concat(right.slice())
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
let result = mergeSortTopDown(array)
console.log(result);