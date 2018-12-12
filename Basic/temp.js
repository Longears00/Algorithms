let palindrome = (str) => {
    if (typeof str !== 'string') return false
    let len = str.length
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false
        }
    }
    return str
}

console.log(palindrome('11'));

function* numbers() {
    const result = 1 + 1
    return 20 + (yield result)
}
let generator = numbers()

console.log(generator.next());
console.log(generator.next());