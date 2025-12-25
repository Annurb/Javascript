//console.log("is working")
//let random = Math.random();
//if (random < 0.5){
 //   console.log("YUR NUMBER IS LESS THAN 0.5"
 //   )
//    console.log(random)
//}
//if (random > 0.5){
   // console.log("YUR NUMBER IS GREATER THAN 0.5"
 //   )
 //   console.log(random)
//}
//console.log("AFTER CONDITIONAL")

const dayOfWeek = prompt("enter a day").toLowerCase();

if(dayOfWeek == 'monday'){
   console.log('I hate MONDAYS')
}
else if(dayOfWeek === 'saturday'){
    console.log('Love SATURDAYS')
}
else if(dayOfWeek === 'friday'){
    console.log('FRIDAYS ARE DECENTS, AFTER WORK')
}
else{
    console.log("MEH")
}

//0-5 - free
//5 - 10 child
//10 - 65 aduly
//65+ senior

const age = 8;

if (age <= 5){
    console.log("You are a baby. get in for free!")
}
else if (age <= 10){
    console.log("You are a child, you pay 10 dollars")
}
else if (age <= 65){
    console.log("You are a adult, you pay 10 20 dollars")
}
else{
    console.log("You are a senior. you pay 10 dollars ")
}