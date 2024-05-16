import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  function AddValue() {
    if(counter != 20){
      setcounter(counter + 1)
      setcounter(counter + 1)
      setcounter(counter + 1)
      setcounter(counter + 1)
    }

    
  }
  function RemoveValue(){
    setcounter(counter-1)
  }
  return (
    <>
      <h1> COUNTER: {counter} </h1>
      <button className='bg-green-400 text-black m-2' onClick={AddValue}> AddValue </button>
      <button className='bg-red-400 text-black' onClick={RemoveValue}>RemoveValue</button>
    </>
  )
}

export default App
