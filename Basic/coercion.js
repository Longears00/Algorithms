var foo = "123"
var baz = parseInt(foo, 10)
console.log(baz);

var foo2 = "123f"
baz = parseInt(foo, 10)
console.log(baz);

console.log("Number coercion")
foo = "123"
baz = Number(foo)
console.log(baz);


var foo2 = "123f"
baz = Number(foo2)
console.log(baz);


console.log("+ Number coercion")
foo = "123"
baz = +foo
console.log(baz);

console.log("toString()");
baz = 456
foo = baz.toString()
console.log(foo);

console.log("String()");
foo = String(baz)
console.log(foo);