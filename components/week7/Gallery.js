import React from "react";
import admin from "./productinfo.jpg";

function GalleryComponent() {
  return (
    <div style={{ margin: "auto", textAlign: "center"}}>
      <h2>Products</h2>
      <h4>this page displays Products info.</h4>
      {/* <img
        src={admin}
        style={{
          height: "200px",
          width: "200px",
          border: "5px solid #000000",
        }}
        alt="Products"
      ></img> */}
    </div>
  );
}
export default GalleryComponent;
