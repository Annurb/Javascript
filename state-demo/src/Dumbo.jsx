import {useState} from 'react'
function generateGameBoard(){   
    console.log("Making the inicial game board")
    return Array(5000);
}

export default function Dumbo(){
    const [board, setBoard] = useState(generateGameBoard)//sem o ()
    console.log(board)
    return <button onClick={() => setBoard("hello!")}>Click me to change the state</button>
}