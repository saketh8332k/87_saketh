import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import AboutComponent from "./About";
import ContactComponent from "./Contact";
import GalleryComponent from "./Gallery";
import HomeComponent from "./Home";
import LoginComponent from "../week8/LoginPage";
// import Week8 from "../week8/week8";
import Signup from "../week8/SignupPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
const NavbarComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={{ paddingBottom: "3rem" }}>
          <ResponsiveNavbar
            logo={
              <h4>
                <b>CLICK TO CART</b>
              </h4>
            }
            styles={{
              navigationBarLarge: {
                backgroundColor: "#fae034",
                color: "#7d0fd1",
              },
              navigation: { fontFamily: "Arial, Helvetica, sans-serif" },
              navigationBarSmall: {
                backgroundColor: "#fae034",
                color: "#7d0fd1",
              },
              navigationCardSmall: {
                backgroundColor: "#fae034",
                color: "#7d0fd1",
              },
            }}
          >
            {" "}
            <ul>
              <li>
                <Nav.Link as={Link} to="/Home">
                  <b>Admin</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/Login">
                  <b>Login</b>
                  {/* <li> */}
                    <Nav.Link as={Link} to="/SignupPage"></Nav.Link>
                  {/* </li> */}
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/About">
                  <b>Customer</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/Gallery">
                  <b>Products</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/Contact">
                  <b>Help</b>
                </Nav.Link>
              </li>
            </ul>
          </ResponsiveNavbar>
        </div>
        <Routes>
          <Route path="/Home" element={<HomeComponent />}></Route>
          <Route path="/Login" element={<LoginComponent />}></Route>
          <Route path="/SignupPage" element={<Signup />}></Route>
          <Route path="/About" element={<AboutComponent />}></Route>
          <Route path="/Gallery" element={<GalleryComponent />}></Route>
          <Route path="/Contact" element={<ContactComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavbarComponent;
