function collectEggs(){
    let totalEggs = 6;
    console.log(totalEggs);
}
collectEggs();

//block scoping:
// let e const estao presas no escopo de bloco 
// var nao esta presa e pode ser usada

//lexical scope
function bankRobbery(){
    const heroes = ['spiderman', 'wolverine']
    function cryForHelp(){
        for(let hero of heroes){
            console.log(`please help us,${hero.toUpperCase()}`)
        }
    }
    cryForHelp()
}
bankRobbery()

//function expressions
//function add(x, y){
//    return x + y
//}

const add = function(x, y){
    return x+ y
}
console.log(add(2, 3))

//higther other functions
//function like an argument
function callTwice(func){
    func()
    func()
}

function rollDie(){
    const roll = Math.floor(Math.random()*6)+1
    console.log(roll)
}
callTwice(rollDie)

//returning functions
function makeMysteryFunc(){
    const rand = Math.random()
    if (rand> 0.5){
        return function(){
            console.log("Congrats, i am a good function!!")
        }
    }
    else{
        return function(){
            console.log("you have been infected by a computer virus")
        }
    }
}
const mystery = makeMysteryFunc()
mystery()

function isBetween(num){
    return num>=50 && num<=100
}
function isBetween2(num){
    return num>=1 && num<=10
}
console.log(isBetween(80))

console.log(isBetween2(0))
//podemos fazer de outra forma
function makeBetweenFunc(min, max){
    return function(num){
        return num>=min &&  num<= max
    }
}
const testRange =function(num){
        return num>=100 &&  num<= 200
    }
console.log(makeBetweenFunc(0, 18))
const isChild = makeBetweenFunc(0, 18)
console.log(isChild(2))
const isAdult = makeBetweenFunc( 19, 64)
console.log(isAdult(19))

//defining methods
const myMath = {
    PI: 3.145,
    square: function(num){
        return num*num
    },
    cube(num){
        return num**3
    }
}
console.log(myMath.square(2))

console.log(myMath.cube(2))

//keyword 'this'
const cat = {
    name: 'Blue',
    color:'grey',
    meow(){
        console.log(`${this.name} says miauuu `)
    }
}
cat.meow()
const meow2 = cat.meow;
meow2()

//try and catch
try{
    hello.toUpperCase();
}catch{
    console.log("ERROR!")
}