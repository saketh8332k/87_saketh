import React from "react";
// import asl from "../images/asl.jpg";
import admin from "./statistics.jpg";
import "./style.css";
function AboutComponent() {
  return (
    <div style={{ margin: "auto", textAlign: "center"}}>
      <h2>Customer</h2>
      <h4>This Page displays customer info.</h4>
      {/* <img
        src={admin}
        style={{
          height: "200px",
          width: "300px",
          border: "5px solid #000000",
        }}
        alt="Customer"
      ></img> */}
    </div>
  );
}
export default AboutComponent;
