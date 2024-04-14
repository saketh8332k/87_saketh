import React from "react";
import admin from "./admin.jpg";

function HomeComponent() {
  return (
    <div style={{ margin: "auto", textAlign: "center"}}>
      <h2>Admin</h2>
      <h4>This is Admin page.</h4>
      <img
        src={admin}
        style={{
          height: "200px",
          width: "200px",
          border: "5px solid #000000",
        }}
        alt="Admin"
      ></img>
    </div>
  );
}
export default HomeComponent;
