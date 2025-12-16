const password = prompt('enter yout password')
if(password.leght >= 6 && password.indexOf(' ') == -1){
    console.log('valid password')
}
else{
    console.log('invalid password')
}