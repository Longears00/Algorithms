const array1 = ['a', 'b', 'c', 'd', 'a']

const array2 = ['z', 'y', 'a']

function containsCommonItem(arr1, arr2) {
    let map = {}
    arr1.forEach(item => {
        if (!map[item]) {
            map[item] = true
        }
    })

    for (let i = 0; i < arr2.length; i++) {

        if (map[arr2[i]]) {

            return true
        }
    }
    return false
}

console.log(containsCommonItem(array1, array2))

function containsCommonItem2(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem2(array1, array2))