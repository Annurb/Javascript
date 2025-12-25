const animal = ['horse', 'cat', 'dog', 'wolf', 'penguin'];
for(let i = 0; i< animal.length; i++){
    console.log(i, animal[i]);
}
for(let i = animal.length - 1; i>= 0; i--){
    console.log(animal[i]);
}

for(let i = 1; i<= 10; i++){
    console.log(`i is ${i}`);
    for(let j = 1; j< 4; j++){
        console.log(`        j is ${j}`)
    }
}
const seatingChart = [
    ['Kristen', 'Erick', 'Namita'],
    ['Ana', 'Elsa', 'Kristoff' ],
    ['Lian', 'marian', 'Sea']
]
for(let i = 0; i< seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`Row #${ i+1}`)
    for(let j = 0; j< row.length; j++){
        console.log(row[j])
    }
}
