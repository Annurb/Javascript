import Chicken from "./Chicken"
import './App.css'
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import "./DoubleDice.css"
import Heading from "./Heading"
import ColorList from "./ColorList"

function App() {
  return <>
  <Heading color="magenta" text="Welcome!" fontSize = "20px"/>
  <Heading color="teal" text="blah" fontSize="40px"/>
  <Greeter person="Bill" from="Colt"/>
  <Greeter person="Ted" from="Colt"/>
  <Greeter  from="nothing"/>
  <Die/>
  <Die numSides={3}/>
  <Die numSides={10}/> 
  <ListPicker values={[1, 2, 3]}/>
  <ListPicker values={['a', 'b', 'c']}/>
  <DoubleDice/>
  <DoubleDice/>
  <DoubleDice/>
  <ColorList colors={['red', 'purple', 'pink', 'teal']}/>
    </>
    
}

export default App
