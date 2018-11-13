// var foo = "bar"

// function bar() {
//     console.log({
//         foo
//     }); //??
//     var foo = "bar"
// }

// function baz(foo) {
//     foo = "bam"
//     bam = "yay"
// }

// bar()

// var foo = "bar" //global scope

// function bar() { //global scope
//     var foo = "baz" //bar scope

//     function baz(foo) { //bar scope
//         foo = "bam" //baz scope
//         baz = "yay"
//         console.log({
//             foo
//         });
//         console.log({
//             baz
//         });
//     }
//     baz()
// }

// bar()
// console.log(foo);

// function foo() {
//     console.log(bar); //dynamic scoping
// }

// function baz() {
//     var bar = "bar"
//     foo();
// }

// baz()

/**
 * Function scoping
 */
// var foo = "foo"

// function bob() {
//     var foo = "foo2"
//     console.log(foo); //??
// }

// bob()

// console.log(foo); //??

// console.log(a)
// console.log(b)

// var a = b
// var b = 2

// console.log(b)
// console.log(a)

// a = b

// console.log(a)

/**
 * Closure
 */

function foo() {
	var bar = 'baz'

	function baz() {
		console.log({ bar })
	}

	bam(baz)
}

function bam(baz) {
	baz() //bar
}

foo()

function foo2() {
	var bar = 'baz'

	return function() {
		console.log({ bar })
	}
}

function bam2() {
	bar = 'bam2'
	foo2()() //bar
}

bam2()
