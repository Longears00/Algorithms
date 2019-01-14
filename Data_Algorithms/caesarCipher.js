function caesarCipher(str, num) {
	num = num % 26
	var lowerStr = str.toLowerCase()
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	var len = lowerStr.length
	var newStr = ''
	for (var i = 0; i < len; i++) {
		var currentLetter = lowerStr[i]
		if (currentLetter === ' ') {
			newStr += currentLetter
			continue
		}
		var currentIndex = alphabet.indexOf(currentLetter)
		var newIndex = currentIndex + num

		if (newIndex > 25) {
			newIndex -= 26
		} else if (newIndex < 0) {
			newIndex += 26
		}

		if (str[i] === str[i].toUpperCase()) {
			newStr += alphabet[newIndex].toUpperCase()
		} else {
			newStr += alphabet[newIndex]
		}
	}
	return newStr
}

console.log(caesarCipher('zoo Keeper', 2))
