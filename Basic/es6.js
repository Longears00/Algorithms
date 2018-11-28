let test = function () {
    this.val = 1
    // setTimeout(function () {
    //     console.log(this.val);
    // }, 1)
    setTimeout(() => {
        console.log(this);
        console.log(this.val);
    }, 1)
}

let excute = new test()

let test2 = function () {
    console.log(arguments);
}

let test3 = () => {
    console.log(arguments[0]);
}


let test4 = (...params) => {
    console.log(params[0]);
}

test2(1, 2, 3)

test3(1, 2, 3)

test4(1, 2, 3)