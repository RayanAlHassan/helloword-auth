import React from "react";
import Login from "../../Components/Login/Login";
import style from "./Home.module.css"
const Home = () => {
  return (
    <div>
      <h1  className={style.title}>welcome to the app</h1>
      <Login />
    </div>
  );
};

export default Home;
