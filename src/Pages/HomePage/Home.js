import React from "react";
import Login from "../../Components/Login/Login";
import style from "./Home.module.css"
const Home = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome to the App</h1>
      <div className={style.loginContainer}>
        <Login />
      </div>
    </div>
  );
};

export default Home;
