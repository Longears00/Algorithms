function Person(name, age, color) {
    this.name = name
    this.age = age
    this.color = color
}

Person.prototype.getName = function () {
    return console.log(this.name);
}

let father = new Person('father', 60, 'red')


father.getName()

Person.prototype.getColor = function () {
    return console.log(this.color);
}

father.getColor()

father.getAge = function () {
    console.log(this.age);
}

console.log(father);

father.getAge()

father.__proto__.getGreeting = function () {
    console.log('22');
}

father.getGreeting()

let sun = function () {
    console.log('this is sun');
}

sun()