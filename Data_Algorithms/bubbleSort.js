const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    let length = array.length
    let count = length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < count; j++) {
            if (j + 1 === length) {
                break
            }
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }

        }
        count--
    }
    return array
}

bubbleSort(numbers);
console.log(numbers);