import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "../Pages/Hello/Hello";
import Home from "../Pages/HomePage/Home";
import Register from "../Components/Register/Register";
function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/hello" element={<Hello />}></Route>

    </Routes>
  );
}

export default AppRoute;
