function maxStockProfit(arr) {
	var minElem = arr[0]
	var maxElem = arr[0]
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < minElem) {
			minElem = arr[i]
		} else if (arr[i] > maxElem) {
			maxElem = arr[i]
		}
	}
	var profit = maxElem - minElem
	return profit < 0 ? -1 : profit
}

console.log(maxStockProfit([ 32, 46, 26, 38, 40, 48, 42 ]))
