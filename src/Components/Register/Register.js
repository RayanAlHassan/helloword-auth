import React, { useState } from 'react';
import style from "./Register.module.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5001/user/register", {
        name,
        email,
        password,
      });
      await new Promise((r) => setTimeout(r, 500));

      console.log("Response from backend:", res.data);
    } catch (err) {
      console.error("Error during registration:", err.response?.data || err.message);
      const msg =
      err.response?.data?.message ||
      err.response?.data?.error ||
      (typeof err.response?.data === "string" ? err.response.data : null) ||
      "Registration failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleRegister}>
        <h1 className={style.title}>Register</h1>

        <input
          className={style.input}
          type='text'
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          {loading ? "Registering..." : "Register"}
        </button>

        {error && <p className={style.error}>{error}</p>}

        <p className={style.text}>
          Already have an account? <a className={style.link} href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
