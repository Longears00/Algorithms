let test = [ 1, 2, 5, 2, 1, 8 ]

let obj = {}
for (let i of test) {
	obj[i] = true
}

let result = Object.keys(obj)
console.log(result)
