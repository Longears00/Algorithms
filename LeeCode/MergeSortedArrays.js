function mergeSortedArray(arr1, arr2) {
    let result = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1
    let j = 1
    while (arr1Item || arr2Item) {
        if (arr1Item === undefined || arr2Item === undefined) {
            arr2Item === undefined ? result.push(arr1Item) : result.push(arr1Item)
            break
        }
        if (arr1Item < arr2Item) {
            result.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else {
            result.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }

    }

    return result
}

let arr1 = [0, 3, 4, 31]
let arr2 = [4, 6, 30]

console.log(mergeSortedArray(arr1, arr2))