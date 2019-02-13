function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return str
    }
    let strArray = str.split('')
    let result = []
    strArray.forEach(item => {
        result.unshift(item)
    })
    return result.join('')
}

console.log(reverse('Hi my name is '))