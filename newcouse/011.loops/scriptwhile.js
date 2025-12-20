let count = 0
while(count<= 10){
    console.log(count)
    count++
}
const SECRET = 'babyHipo'
let guess = prompt("Enter the secret code: ")
while(guess != SECRET){
     guess = prompt("Enter the secret code: ")
}
console.log("Congrats")