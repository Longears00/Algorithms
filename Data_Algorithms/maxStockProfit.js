function maxStockProfit2(arr) {
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

function maxStockProfit(arr) {
	var buyPrice = 0
	var sellPrice = 0
	var maxProfit = -1

	var changeBuyPrice = true
	for (var i = 1; i < arr.length; i++) {
		if (changeBuyPrice) {
			buyPrice = arr[i]
		}
		sellPrice = arr[i + 1]

		if (sellPrice < buyPrice) {
			changeBuyPrice = true
		} else {
			var tempProfit = sellPrice - buyPrice
			if (tempProfit > maxProfit) {
				maxProfit = tempProfit
			}
			changeBuyPrice = false
		}
	}

	return maxProfit
}

console.log(maxStockProfit([ 10, 18, 4, 5, 9, 6, 16, 12 ]))
