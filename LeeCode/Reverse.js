/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let str = x.toString()
    let total = str.length
    let result = []
    for (let i = 0; i < total; i++) {
        let checkNum = str[i]
        if (!isNaN(Number(checkNum))) {
            result.unshift(Number(checkNum))
        }
    }
    if (x < 0) {
        result.unshift('-')
    }
    let num = Number(result.join(''))

    if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
        return 0
    }
    return num
};

let num = 1534236469

console.log(reverse(num));