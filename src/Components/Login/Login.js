import React, { useState } from 'react';
import style from "./Login.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();
    setLoading(true); // start loading

    try {
      setError(""); 

      const res = await axios.post("http://localhost:5001/user/login", { email, password });
      console.log("logging", res.data);
      localStorage.setItem("token", res.data.token); // save token
      // simulate a short delay 
       await new Promise((r) => setTimeout(r, 500));
      navigate("/hello");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      const msg = err.response?.data?.message || "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false); // stop loading after navigation or error
    }
  };

  return (
    <div className={style.container}>
 <form className={style.form} onSubmit={handleLogin}>
  <h1 className={style.title}>Login</h1>

  <input 
    className={style.input}
    type='email' 
    placeholder='Email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  
  <input
    className={style.input}
    type='password'
    placeholder='Password'
    value={password}
    onChange={(e) => setPass(e.target.value)}
    required
  />
  
  <button className={style.button} type='submit' disabled={loading}>
    {loading ? "Loading..." : "Login"}
  </button>

  {error && <p className={style.error}>{error}</p>}

  <p className={style.text}>
    Don't have an account? <a className={style.link} href="/register">Register here</a>
  </p>
</form>

    </div>
  );
};

export default Login;
