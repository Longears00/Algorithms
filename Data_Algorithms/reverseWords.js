function reverseWords(str) {
	var lowerStr = str.toLowerCase().split(' ')

	var newStr = []
	lowerStr.forEach((word) => {
		var lowerWord = word.split('')
		if (lowerWord.length === 1) {
			newStr.push(lowerWord)
		} else {
			var wordlen = lowerWord.length - 1

			var newWord = ''
			for (var n = wordlen; n >= 0; n--) {
				newWord += lowerWord[n]
			}

			newStr.push(newWord)
		}
	})

	return newStr.join(' ')
}

console.log(reverseWords('this is a string of words'))
