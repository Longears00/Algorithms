//standard quicksort

function quickSort(arr) {
	if (arr.length === 0) {
		return []
	}

	let left = []
	let right = []
	let newArray = []
	let pivot = arr.pop()
	let count = arr.length

	for (let i = 0; i < count; i++) {
		let currentValue = arr[i]
		if (currentValue < pivot) {
			left.push(currentValue)
		} else {
			right.push(currentValue)
		}
	}
	return newArray.concat(quickSort(left), pivot, quickSort(right))
}

let a = [ 4, 2, 1, 5, 6, 9 ]
console.log(quickSort(a))
