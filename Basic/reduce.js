const numbers = [1, -1, 2, 3]

let sum = numbers.reduce((accumulater, current) => {
    console.log(current)
    return accumulater + current
}, 0)

console.log(sum)