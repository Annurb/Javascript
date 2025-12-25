//default params
function rollDie(numSides){
    if(numSides === undefined){
        numSides = 6
    }
    return Math.floor(Math.random()*numSides)+1
}
console.log(rollDie(20))
console.log(rollDie())
//outra forma mais compacta
function rollDie1(numSides = 6){
    return Math.floor(Math.random()*numSides)+1
}

function greet(msg, person = 'Hey there', punk = "!!!!!"){
    return `${msg} , ${person}${punk}`
}
console.log(greet('hello', 'joaquin'))
console.log(greet('hello'))
console.log(greet('hello', "rosa", "."))


//spread - expanding
Math.max(13, 4, 5, 32, 12, 67, 58, 903)
Math.min(2, 5, 1)
const num = [13, 4, 5, 32, 12, 67, 58, 903]
//para separar
const maximo = Math.max(...num)
console.log(maximo)
console.log(...num)
console.log(..."hello")

//spread with arrays iterable
const cats = ["blue", 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyiat']
const allPets = [...cats, ...dogs, 'uidguw']
console.log(allPets)

//Spread with objects
const feline = { legs: 4, family: 'Felidae'}
const canine = {isFurry: true, family: 'Caninae'}
const catDog = {...feline, ...canine}
console.log(catDog)

const dataFromForm = {
    email: "abd@gmail.com",
    password: '12345',
    username: 'abd'
}
console.log({...dataFromForm, id : 12345})

//Rest
function sum(){
    return arguments
}
console.log(sum(23, 45, 67))

function sum1(...nums){
    console.log(nums. reduce((total, el)=>total+el))
}
sum1(23, 45, 67)

function raceResult(gold, silver, ...everyOnelse){
    console.log(`gold goes to: ${gold}`)
    console.log(`silver goes to: ${silver}`)
    console.log(`thanks everyone ${everyOnelse}`)
}
raceResult('Tammy', 'Tod', 'Tina', 'Trevor')

//destructuring
let scores = [278939381, 876346234, 7683674, 6644, 24]
const [gold, silver, ...everyone]  = scores;
console.log(gold, silver)
console.log(everyone)

const user = {
    email: 'fhjuy@gmail.com',
    password: '832832hjdhj',
    firstName: 'yuieqwuieq',
    lastName: 'uhuh',
    born: 1980
}
const {email, password, firstName} = user
console.log(email, firstName)
const {born: birthYear} = user
console.log(birthYear)

//destructuring params
function fullName({firstName, lastName = 'uiwhuje'}){
    return `${firstName} ${lastName}`
}
console.log(fullName(user))

//movies.filter({score})  => score>= 90