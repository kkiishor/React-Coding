import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'

import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(0)
  const dispatch = useDispatch()


  return (
    <>
      
    </>
  )
}

export default App
