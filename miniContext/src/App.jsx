import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>KISHOR : Without Second Thought</h1><hr />
      <Login />
    </>
  )
}

export default App
