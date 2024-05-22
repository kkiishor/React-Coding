import React,{ useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(UserContext)

  return(
    <div>
      <input 
      type="text" 
      placeholder="username" 
      value={username} 
      onChange={(e)=> setUsername(e.target.value)}
      />

      <input 
      type="password"
       placeholder="password" 
       value={password} 
       onChange={(e)=> setPassword(e.target.value)}
      />

      <button>Submit</button>
    </div>
  )
}

export default Login;