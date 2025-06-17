//Route.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "../Pages/Hello/Hello";
import Home from "../Pages/HomePage/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/hello" element={<Hello />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default AppRoute;