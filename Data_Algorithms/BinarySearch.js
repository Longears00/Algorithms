//Binary search

function BinarySearch(array, element, left, right) {
	if (left > right) {
		return false
	}

	let middle = (left + right) / 2

	if (array[middle] == element) {
		return middle
	}
	if (array[middle] > element) {
		return BinarySearch(array, element, left, middle - 1)
	} else {
		return BinarySearch(array, element, middle + 1, right)
	}
}

let arr = [ 3, 7, 8, 10, 13, 17, 33 ]
let searchValue = 3

let result = BinarySearch(arr, searchValue, 0, arr.length - 1)

console.log(result)

function BinarySearchIterative(array, element) {
	let left = 0
	let right = array.length - 1
	if (left > right) {
		return false
	}

	while (left <= right) {
		let middle = (left + right) / 2

		if (array[middle] == element) {
			return middle
		}
		if (array[middle] > element) {
			right = middle - 1
			continue
		} else {
			left = middle + 1
			continue
		}
	}
	return false
}

let result2 = BinarySearchIterative(arr, searchValue)

console.log(result2)

function binarySearch(arr, key) {
	var len = arr.length
	var middle = Math.floor(len / 2)
	var middleElem = arr[middle]
	if (middleElem === key) {
		return true
	} else if (middleElem > key && len > 1) {
		return binarySearch(arr.slice(0, middle), key)
	} else if (middleElem < key && len > 1) {
		return binarySearch(arr.slice(middle), key)
	}
	return false
}

console.log(binarySearch([ 5, 7, 12, 16, 36, 42, 56, 71 ], 1))
