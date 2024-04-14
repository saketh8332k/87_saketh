import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./week8.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3087/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((users) => {
        const user = users.find(
          (user) =>
            user.email === formData.email &&
            user.password === formData.password
        );
        if (user) {
          console.log(formData);
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("isLoggedin", true);
         toast.success("Login successfully");
        } else {
         toast.error("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div >
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-success">
          Login
        </button>
        {"         "}
        <h7 style={{textDecorationLine:"underline"}}>Don't have an account?</h7>
        <button className="btn btn-success" >
          <Link to="/SignupPage" className="btn  nav-link">
            New User?
          </Link>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;