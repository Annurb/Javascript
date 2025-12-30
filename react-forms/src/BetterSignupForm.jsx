import {useState} from 'react'

export default function BetterSignupForm(){
    const [formData, setFormData] = useState({firstName: "", lastName: "", password:""})
    const handleChange = (evt) =>{
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) =>{
            return {
        ...currData,
        [changedField]: newValue,
      };
        })

    }
    const handleSubmit = () =>{
        console.log(formData.firstName, formData.lastName)
    }
    return(
        <div>
            <label htmlFor="firstname">Enter a first name: </label>
            <input 
            type="text"
            name="firstName" 
            placeholder="firstname" 
            value={formData.firstName} onChange={handleChange} id='firstname'/>
            <br />

            <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />
      <br />
            
            <label htmlFor="password">Enter a password: </label>
            <input 
            type="password" 
            name="password"
            placeholder="password" 
            value={formData.password} onChange={handleChange} id='password'/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}