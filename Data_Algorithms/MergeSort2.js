const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    let length = array.length
    if (length === 1) {
        return array
    }
    // Split Array in into right and left
    let middle = Math.floor(length / 2)

    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let result = []
    console.log(left)
    console.log(right)
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left.slice()).concat(right.slice())
}


const answer = mergeSort(numbers);
console.log(answer);