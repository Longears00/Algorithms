/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    if (x === 0) {
        return true
    }
    let checkStr = x.toString()
    let left = 0
    let right = checkStr.length - 1
    let times = Math.floor(right / 2)

    for (let i = 0; i <= times; i++) {
        if (checkStr[left] !== checkStr[right]) {
            return false
        } else {
            left++
            right--
        }

    }
    return true
};

let num = 0

console.log(isPalindrome(num));