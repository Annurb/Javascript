//async function hello(){
//}
/*
const sing = async () => {
    throw "OH NO, PROBLEM!"
    return 'lalalala'
}
sing().then((data) => {
    console.log('PROMISE RESOLVED WITH: ', data)
})
.catch(err => {
    console.log('OH NO, PROMISSE REJECTED')
    console.log(err)
})
*/
const login = async (username, password) =>{
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'cofee') return 'WELCOME'
    throw 'Invalid Password'
}
login('jeiwe', 'cdidhui')
.then(msg => {
    console.log('LOGGED IN !')
    console.log(msg)
})
.catch(err => {
    console.log('ERROR!')
    console.log(err)
})