function meanMode(arr) {
	return {
		mean: getMean(arr),
		median: getMedian(arr),
		mode: getMode(arr)
	}
}

function getMean(arr) {
	sum = arr.reduce((current, next) => {
		return current + next
	})
	return sum
}

function getMode(arr) {
	var modeObj = {}
	arr.forEach((num) => {
		if (!modeObj[num]) {
			modeObj[num] = 0
		}
		modeObj[num]++
	})
	var maxFrequency = 0
	var modes = []
	for (var num in modeObj) {
		if (modeObj[num] > maxFrequency) {
			modes = [ num ]
			maxFrequency = modeObj[num]
		} else if (modeObj[num] === maxFrequency) {
			modes.push(num)
		}

		if (modes.length === Object.keys(modeObj).length) {
			modes = []
		}
	}
	return modes
}

console.log(meanMedianMode([ 1, 3, 5, 7, 3, 1, 9, 10 ]))
