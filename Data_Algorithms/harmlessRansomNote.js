function harmlessRansomNote(noteText, magazineText) {
	var noteArr = noteText.split(' ')
	var magazineArr = magazineText.split(' ')
	var magazineObj = {}

	magazineArr.forEach(function(word) {
		if (!magazineObj[word]) {
			magazineObj[word] = 0
		}
		magazineObj[word]++
	})
	var noteIsPossible = true
	noteArr.forEach(function(word) {
		if (!magazineObj[word]) {
			noteIsPossible = false
		} else if (magazineObj[word]) {
			var num = magazineObj[word]
			num--
			if (num < 0) {
				noteIsPossible = false
			}
		}
	})
	return noteIsPossible
}
