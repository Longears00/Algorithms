function User(fName, lName) {
    if (this instanceof User) {
        this.firstName = fName
        this.lastName = lName
    } else {
        return new User(fName, lName)
    }
}

User.prototype.fullName = function () {
    console.log(`${this.firstName}`)
}

let userOne = User('Steve', 'Smith')

userOne.fullName()

let userTwo = new User("James", 'Smith')

