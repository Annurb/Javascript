import Chicken from "./Chicken"
import './App.css'
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from "./Heading"
import ColorList from "./ColorList"
import ShoppingList from "./ShoppingList.jsx"
import Clicker from "./Clicker"
import Form from "./Form"
import Clicker1 from "./Clicker1"
import Counter from "./Counter"
import Toggler from "./Toggler"
import './Toggler.css'
import ToggleCounter from "./ToggleCounter"

const data =[
  {id:1, item:'eggs', quantity:12, completed: false},
  {id:2,item:'milk', quantity:1, completed: true},
  {id:3,item:'chicken breats', quantity:4, completed: false},
  {id:4,item:'carrots', quantity:6, completed: true}
]
function App() {
  return <>
  <ToggleCounter/>
  <Toggler/>
  <Counter/>
  <Clicker1 message="Hi!" buttonText="Please Click Me"/>
  <Clicker1 message="Please Stop Clicking me!" buttonText="do not click"/>
  <ShoppingList items={data}/>
  <Form/>
  {/*<Heading color="magenta" text="Welcome!" fontSize = "20px"/>
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
  <ColorList colors={['red', 'purple', 'pink', 'teal']}/>*/}
    </>
    
}

export default App;
