import { useState, useCallback} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed ] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword]= useState("")

  const passwordGenerator = useCallback(fn, [])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password generator</h1>
    </>
  )
}

export default App
