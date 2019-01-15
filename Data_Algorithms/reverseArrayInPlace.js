function reverseArrayInPlace(arr) {
	var len = Math.floor(arr.length - 1)
	var count = Math.floor(len / 2)
	for (var i = 0; i < count; i++) {
		var temp = arr[i]
		arr[i] = arr[len]
		arr[len] = temp
		len--
	}
	return arr
}

console.log(reverseArrayInPlace([ 'a', 'b', 'c' ]))
