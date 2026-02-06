// Super keywords
class Pet{
    constructor (name, age){
        console.log("in cat constructor")
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating!`
    }
}
class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        console.log("in cat constructor")
        super(name, age)
        this.livesLeft = livesLeft
    }
    meow(){
        return "MEOWWWW!"
    }
}
class Dog extends Pet{
    woof(Pet){
        return "WOOOF!"
    }
}
const d1 = new Dog('hue', 10)
console.log(d1)
console.log(d1.eat())
const c1 = new Cat('caty', 2)
console.log(c1)
console.log(c1.meow())