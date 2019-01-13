/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let mergeList = [...l1, ...l2]
    let result = quickSort(mergeList)
    return result
}

function quickSort(arr) {
    if (arr.length === 0) {
        return []
    }
    let left = []
    let right = []
    let newArray = []
    let pivot = arr.pop()
    let count = arr.length

    for (let i = 0; i < count; i++) {
        let currentValue = arr[i]
        if (currentValue < pivot) {
            left.push(currentValue)
        } else {
            right.push(currentValue)
        }
    }
    return newArray.concat(quickSort(left), pivot, quickSort(right))
}


let l1 = [1, 2, 4]
let l2 = [1, 3, 4]

console.log(mergeTwoLists(l1, l2));