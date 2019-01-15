function fibonacci(position) {
	if (position < 3) {
		return 1
	}

	return fibonacci(position - 1) + fibonacci(position - 2)
}

console.log(fibonacci(4))

function fibonacciMemo(index, cache) {
	cache = cache || []
	if (cache[index]) {
		return cache[index]
	} else {
		if (index < 3) {
			return 1
		} else {
			cache[index] = fibonacciMemo(index - 1, cache) + fibonacciMemo(index - 2, cache)
		}
	}
	return cache[index]
}

console.log(fibonacciMemo(4))
