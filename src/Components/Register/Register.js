import React,{useState} from 'react'
import style from "./Register.module.css"
import axios from "axios";

const Register = () => {
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [password,setPass]=useState('')

 const handleRegister= async (e)=>{
    e.preventDefault();

    const data={
        name,email,password
    }
    try{
        const res= await axios.post("http://localhost:5001/register",{
            name,email,password
        })
        console.log("Response from backend:", res.data);

    }

    catch (err){
        console.error("Error during registration:", err.response?.data || err.message);

    }


 }
  return (
    <div>
       <h1 className={style.title} >register</h1>
      <form onSubmit={handleRegister}>
      <input 
        type='name' 
        placeholder='full name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <br/>
        <input 
        type='email' 
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e)=>setPass(e.target.value)}
        />
        <br/>
        <button type='submit'>register</button>
        <p>already have an account? <a href="/">login here</a></p>

      </form>
    </div>
  )
}

export default Register
