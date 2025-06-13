import React, { useState } from 'react'
import style from "./Login.module.css"
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPass]=useState('')
  const navigate = useNavigate(); // <-- hook inside component!

const handleLogin= async (e)=>{
e.preventDefault();

try{

  const res =await axios.post("http://localhost:5001/user/login", {email,password})
  console.log("logging",res.data)
  localStorage.setItem("token",res.data.token)//save token after successfully login
  navigate("/hello")
}
catch(err){
  console.error("Login failed:", err.response?.data || err.message || err.message);

}
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
