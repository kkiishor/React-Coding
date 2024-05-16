import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 5
  const addValue = () =>{
    console.log("value added:", counter);
    // counter = counter + 1;
    setCounter(counter + 1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h3>counter value: {counter}</h3>
      <button onClick={addValue}>Add value {counter}</button>
      <button>Remove value {counter}</button>

    </>
  )
}

export default App
