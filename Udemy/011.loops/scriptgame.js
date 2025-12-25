let maximum = parseInt(prompt('Enter the maximum number!'))
while(!maximum){
    maximum = parseInt(prompt('Enter the maximum number!'))
}
const targetNum = Math.floor(Math.random() * maximum)+1
alert(targetNum)
let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;
while (guess !== targetNum){
    attempts++
    if (guess> targetNum){
        guess = parseInt(prompt('Too hight! enter a new'))
    }else{
        guess = parseInt(prompt('Too low! enter a new'))

    }
}
alert(`you got it! it took you ${attempts} guesses`)