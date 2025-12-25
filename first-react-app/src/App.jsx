import Chicken from "./Chicken"
import './App.css'
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"

function App() {
  return <>
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
    </>
    
}

export default App
