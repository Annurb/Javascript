
import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <RatingDemo/>
    <FormDemo/>
      <Button variant="contained" onClick={() => alert("HI")}>Contained</Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button color="success" size="small" variant="contained" onClick={() => alert("HI")}>Contained</Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      
    </>
  )
}

export default App
