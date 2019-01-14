function isPalindrome(str) {
	str = str.toLowerCase()
	var chartArr = str.split('')
	var validChat = 'abcdefghijklmnopqrstuvwxyz'.split('')
	var letterArr = []
	chartArr.forEach((char) => {
		if (validChat.indexOf(char) > -1) {
			letterArr.push(char)
		}
	})
	var len = Math.floor(letterArr.length / 2)
	var maxLen = letterArr.length - 1
	for (var i = 0; i < len; i++) {
		if (letterArr[i] !== letterArr[maxLen]) {
			return false
		}
		maxLen--
	}
	return true
}

console.log(isPalindrome("Madam i'm adam"))
