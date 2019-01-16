function bubbleSort(arr) {
	var len = arr.length
	for (var i = 0; i < len; i++) {
		for (var j = 1 + i; j < len; j++) {
			if (arr[i] < arr[j]) {
				var temp = arr[j]
				arr[j] = arr[i]
				arr[i] = temp
			}
		}
	}
	return arr
}

console.log(bubbleSort([ 2, 1, 3, 4, 8, 5 ]))
