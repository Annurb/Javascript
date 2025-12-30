import {useState} from 'react'
export default function SignUpForm(){
    const [firstName, setFirstName ] = useState("")
    const [lastName, setLastName ] = useState("")
    const updateFirstName = (evt) =>{
        setFirstName(evt.target.value)
    }
    const updateLastName = (evt) =>{
        setLastName(evt.target.value)
    }
    const handleSubmit = () =>{
        console.log(firstName, lastName)
    }
    return(
        <div>
            <label htmlFor="firstname">Enter a first name: </label>
            <input 
            type="text" 
            placeholder="firstname" 
            value={firstName} onChange={updateFirstName} id='firstname'/>
            <br />

            <label htmlFor="lastname">Enter a last name: </label>
            <input 
            type="text" 
            placeholder="lastname" 
            value={lastName} onChange={updateLastName} id='lastname'/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}