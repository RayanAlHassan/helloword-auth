import React, { useState } from 'react'
import style from "./Login.module.css"
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPass]=useState('')

const handleLogin=(e)=>{
e.prevenDefault();
console.log("logging")
}
  return (
    <div>
      <h1 className={style.title}>login</h1>
      <form onSubmit={handleLogin}>
        <input 
        type='email' 
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e)=>setPass(e.target.value)}
        />
        <button type='submit'>Login</button>
        <p>don't have an account? <a href="/register">register here</a></p>

      </form>
    </div>
  )
}

export default Login
