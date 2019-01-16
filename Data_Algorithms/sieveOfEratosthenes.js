function sieveOfEratosthenes(num) {
	var primes = []
	primes[0] = false
	primes[1] = false
	for (var i = 2; i <= num; i++) {
		primes[i] = true
	}

	for (var n = 2; n <= Math.sqrt(num); n++) {
		for (var j = 2; j * n <= num; j++) {
			primes[n * j] = false
		}
	}
	var result = []
	primes.forEach((val, index) => {
		if (val) {
			result.push(index)
		}
	})
	return result
}

console.log(sieveOfEratosthenes(20))
