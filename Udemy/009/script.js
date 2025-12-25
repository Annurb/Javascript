//metodo push(adiciona no final)
let hi = []
hi.push('hi');
hi.push('hello')
console.log(hi)

//metodo pop(apaga no final)
hi.pop();
console.log(hi);
hi.pop()
console.log(hi);

//metodo shift(apaga no inicio);
let favorite = ['bolo', 'salgado'];
favorite.shift()
console.log(favorite);

//metodo unshift(adiciona no inicio)
favorite.unshift('brigadeiro')
console.log(favorite);

//metodo concat
let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];
console.log(cats.concat(dogs));

//metodo includes(boolean method)
console.log(cats.includes('blue'));
console.log(cats.includes('Blue'));

//metodo indexOf
console.log(cats.indexOf('blue'));
console.log(cats.indexOf('sehjfrf'));

//metodo reverse
console.log(cats.reverse())

//metodo slice(faz uma copia)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.slice(3));
console.log(colors.slice(2, 4));
console.log(colors.lastIndexOf(-3));

//metodo splice
colors.splice(5, 1)
console.log(colors);
colors.splice(1, 0, 'red-orange');
console.log(colors);

//metodo sort
let score= [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(score.sort());

//Comparar arrays nao compara o conteudo e sim se sao o mesmo array

//const da pra mudar em um array
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

const gameBoard = [['x', '0', 'x'], ['0', null, 'x'], ['0', '0', 'x']];
console.log(gameBoard[1]);
console.log(gameBoard[1][1]);