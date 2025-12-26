export default function Clicker1({buttonText, message}){
    return <button onClick={() => alert(message)}>{buttonText}</button>

}