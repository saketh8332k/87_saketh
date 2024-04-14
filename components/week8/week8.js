import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage";
import Signup from "./SignupPage";
const Week8 = () => {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>CLICK TO CART</h2>
    <Router>
      <Routes>
        <Route path="/87_saketh/" element={<Login />} />
        <Route path="/SignupPage" element={<Signup />} />
      </Routes>
    </Router>
    </div>
  );
};
export default Week8;