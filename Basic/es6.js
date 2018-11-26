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