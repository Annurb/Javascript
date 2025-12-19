//objects
const person = {fistName : 'Mick', lastName: 'Jagger'};
console.log(person);
const kitchenSink = {favNum: 734982, isFunny : true, colors: ['red', 'orange']};

//buscar a chave 
console.log(person['lastName']);
console.log(kitchenSink['colors']);

//segunda forma
console.log(person.lastName)

//outro objeto
const years = {1999: 'GOOd', 2020: 'BAD'};
console.log(years['1999']);

let birthYear = 2020;
console.log(years[birthYear])

//update objects
//outro objeto
const midterms = {danielle: 96, thomas: 78};
midterms.thomas = 79
console.log(midterms.thomas);
midterms.ezra = 'B+'
console.log(midterms)

//arrays +objects
const comments = [
    {username: 'Tammy', text: 'lololololo', votes: 9},
    {username: 'FishBoi', text: 'glubglub', votes: 6738}
];
console.log(comments[1]);
console.log(comments[1].text);
