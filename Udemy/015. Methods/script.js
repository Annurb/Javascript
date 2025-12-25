//Metodos com array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//printar cada elemento do ARRAY
function print(element) {
    console.log(element)
}
numbers.forEach(print)

//ou da pr fazer assim
numbers.forEach(function (el) {
    console.log(el)
})

//outra forma
for (let el of numbers) {
    console.log(el)
}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1967
    },
    {
        title: 'Stand by me',
        score: 85,
        year: 2001
    },
    {
        title: 'Parasite',
        score: 95,
        year:2004
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

//Map - cria um novo array transformado
const doubles = numbers.map(function (num) {
    return num * 2
})
console.log(doubles)


const titles = movies.map(function (movie) {
    return movie.title
})
console.log(titles)

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score}`
})
console.log(newMovies)

//new sintax
const newMoviesNew = movies.map(movie => (
    `${movie.title} - ${movie.score}`
))
console.log(newMoviesNew)

//atv
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map(function (names) {
    return names.first;
})
console.log(firstNames);

//function expressions - arrow functions
const add = (x, y) => {
    return x + y
}
console.log(add(1, 2))

const square = (x) => {
    return x ** 2
}
console.log(square(9))

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}
//da pra usar () ao inves de {} porem é apenas com uma expressao
console.log(rollDie())

//podemos fazer assim tambem
const add1 = (a, b) => a + b + 1
console.log(add1(1, 2))

//Mecanica para esperar
//setTimeout
console.log("hello!")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

//setInterval para fazer as mesmas coisas no mesmo intervalo
//const id = setInterval(() => {
//    console.log(Math.random())
//}, 2000)

//clearInterval(id) para parar

//metodo filter -- faz um novo array de acondo com as condiçoes do filtro
const four = numbers.filter(n => {
    return n === 4
})
console.log(four)

const goodMovies = movies.filter(movie => {
    return movie.score > 80
})
const goodTitles = goodMovies.map( m => m.title)
console.log(goodMovies)
console.log(goodTitles)

//ou da pra colocar em uma unica funcao
movies.filter(m => m.score > 80).map(m => m.title);

const recentMovies = movies.filter(m => m.year > 2000)
console.log(recentMovies)

//every and some - retorna true or false
//every ve se toldo item da lista corresponde à condicao dada
const exams = [80, 98, 92, 78, 7, 90, 89, 84, 81, 77]
const passou = exams.every(score => score >= 75)
console.log(passou)

//some ve se algum item da lista corresponde a condicao dada
const passou1 = exams.some(score => score >= 75)
console.log(passou1)

//atv
const allEvens = array => array.every(num => num%2 == 0)
console.log(allEvens([2, 4, 6, 8]))

//reduce metodo - muito usado - soma/multiplica/faz qqr coisa com todos os indices da lista
const prices = [9, 2, 20, 50, 30]
const total = prices.reduce((total, price)=> {
    return total +price
})
const total1 = prices.reduce((total,price) => total +price)
console.log(total1)

const minPrice = prices.reduce((min, price) => {
    if (price < min){
        return price;
    }
    else{
        return min
    }
})
console.log(minPrice)

const highest = movies.reduce((bestMovie, currMovie) =>{
    if(currMovie.score > bestMovie.score){
        return currMovie;
    }else{
        return bestMovie;
    }
})
console.log(highest)

//arrow functions and 'this'
const person = {
    firstName:'Viggo',
    lastName: 'Mortensen',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName())

//funciona apenas assim
const person1 = {
    firstName:'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}
console.log(person1.shoutName())