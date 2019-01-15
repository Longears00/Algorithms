function findNumberBySum(arr, sum) {
	var result = []
	var hashtable = []
	for (var i = 0; i < arr.length; i++) {
		var currNum = arr[i]
		var findNum = sum - currNum
		if (hashTable.indexOf(findNum) > -1) {
			result.push([ currNum, findNum ])
		}
		hashtable.push(currNum)
	}
	return result
}
