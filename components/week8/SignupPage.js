import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./week8.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    address: "",
    gender: "",
    pno: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3087/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(formData);
        toast.success("Registered successfully")
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Registered Failed")
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container">
      <h1>Signup Page</h1>

      <form onSubmit={handleSubmit}>
        <div >
          <div className="form-group col-md-6">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              placeholder="Enter username"
              onChange={handleChange}
              required
            />
          </div>
          
        </div>
        <div >
          <div className="form-group col-md-6">
            <label>Full name: </label>
            <input
              type="text"
              className="form-control"
              name="fullname"
              value={formData.fullname}
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group col-md-6">
            <label>Phone Number: </label>
            <input
              type="text"
              className="form-control"
              inputMode="numeric"
              name="pno"
              value={formData.pno}
              placeholder="Enter Phone Number"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-md-6">
          
          <label>Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            required
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>
        
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>{" "}
          {"                          "}
          <button className="btn btn-success">
            <Link to="/" className="btn  nav-link">
              Login
            </Link>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;