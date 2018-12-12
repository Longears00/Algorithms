/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	if (nums.length <= 0) {
		return false
	}
	let total = nums.length

	let result = []
	for (let i = 0; i <= total; i++) {
		let num = nums[i]
		let copyArray = [...nums]
		delete copyArray[i]
		let checkNum = target - num

		let checkIndex = copyArray.indexOf(checkNum)
		if (checkIndex > 0) {
			result.push(i, checkIndex)
			break
		}
	}
	return result
}

let nums = [3, 3]
let target = 6
let result = twoSum(nums, target)
console.log(result)