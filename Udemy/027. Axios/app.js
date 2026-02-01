/*
axios.get("https://swapi.tech/api/people/1/").then((res) => {
    console.log('RESPONSE: ', res)
}).catch(e=>{
    console.log('ERROR', e)
})
*/
const getStarWarsPerson = async (id) =>{
    try{
    const res = await axios.get(`https://swapi.tech/api/people/${id}/`)
    console.log(res.data.result.properties.name, res.data.result.properties.height)
    }catch(e){
        console.log("ERROR", e)
    }
}
getStarWarsPerson(5)

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () =>{
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try{
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    console.log(res.data.joke)
    return res.data.joke;
    }
    catch(e){
        return 'N JOKES AVAILABLE, SORRY!'
    }
}
button.addEventListener('click', addNewJoke)