//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    let result = {}
    let len = input.length
    for (let i = 0; i < len; i++) {
        let number = input[i]

        if (result[number] !== undefined && !result[number]) {
            return number
        }
        result[number] = false
    }
    return undefined

}
console.log(firstRecurringCharacter([2, 3, 4, 5]))