//method =>obj
//function=>global

const video = {
    title: 'video obj',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag)
        }, this)

        this.tags.forEach((tag) => {
            console.log(this.title, tag)
        })
    }
}

//video.showTags()


function talk() {
    console.log(this.sound);
}
let boromir = {
    sound: 'woof'
}

let talkBoundToBoromir = talk.bind(boromir)

//talkBoundToBoromir()

let boromir2 = {
    speak: talk,
    sound: 'woof'
}

//boromir2.speak()

let obj = {
    num: 2
}

let addToThis = function (a) {
    return this.num + a
}

// console.log(addToThis.call(obj, 2))
// console.log(addToThis.apply(obj, [3]))


/**
 * prototype
 */
function talk() {
    console.log(this)
    console.log(this.sound)
}

let animal = {
    talk,
    sound: 'animal'
}

let cat = {
    sound: 'meow',
}

let prarieDog = {
    howl: function () {
        console.log(this.sound.toUpperCase())
    }
}
animal.talk()

// Object.setPrototypeOf(cat, animal)
// cat.talk()
// Object.setPrototypeOf(cat, prarieDog)
// cat.howl()


/**
 * new 
 * @param {*} saying 
 */
function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function () {
    console.log('I say', this.saying)
}

function New(constructor) {
    var obj = {} //1 创建空对象
    Object.setPrototypeOf(obj, constructor.prototype) //2 设置 prototype
    let argsArray = Array.from(arguments)
    console.log(argsArray.slice(1))
    constructor.apply(obj, argsArray.slice(1)) //3 设置 this 环境指向

    return obj // 4 return obj
}

var crockFord = New(Person, 'litter person')
crockFord.talk()

/**
 * Object.create()
 */

const catAnimal = {
    makeSound: function () {
        console.log(this.sound)
    }
}

//create object.create
function ObjectCreate(proto) {
    var obj = {}
    Object.setPrototypeOf(obj, proto)
    return obj
}

const mark = Object.create(catAnimal)
mark.sound = 'mewuu'
mark.makeSound()

console.log(mark.__proto__)

console.log('is mark a cat', catAnimal.isPrototypeOf(mark))

/**
 * Class
 */
console.log("================Class====================")
class Mammal {
    constructor(sound) {
        this.sound = sound
    }
    talk() {
        console.log(this.sound)
    }
}

class Cat extends Mammal {
    constructor(sound) {
        super(sound)
    }
    talk() {
        console.log('cat ', this.sound)
    }
}

let fluffy = new Cat('woof')
fluffy.talk()