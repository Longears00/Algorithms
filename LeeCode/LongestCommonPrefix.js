/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length === 0) {
        return ""
    } else if (strs.length === 1) {
        return strs[0]
    }
    let total = strs.length - 1
    let preValue = null
    let prefix = []
    let flag = true
    let checkStr = strs[0]
    if (checkStr.length === 0) {
        return ""
    }
    let firstTotal = checkStr.length
    for (let n = 0; n < firstTotal; n++) {
        preValue = checkStr[n]
        if (!flag) {
            break
        }

        for (let i = 1; i <= total; i++) {
            let nextValue = strs[i][n]

            if (preValue !== nextValue) {
                flag = false
                break
            } else {
                flag = true
            }

            if (flag && i === total) {

                prefix.push(preValue)
            }

        }


    }

    return prefix.length === 0 ? "" : prefix.join('')

};

let strs = ["a"]
let result = longestCommonPrefix(strs)
console.log(result);