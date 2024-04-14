import React from "react";
import profile from "./profile_image.jpg";
function Week1() {
  return (
    <div style={{textAlign:"center"}}>
      <h3>Hello World</h3>
      <hr />
      <h3>Name:M. SaiSaketh</h3>
      <h3>Roll No: 2211cs010387 </h3>
      <h3>Group: 7(A)</h3>
      <hr />
      <img
        src={profile}
        style={{ width: "200px", height: "200px", borderRadius: " 50% " }}
        alt="sai saketh"
      />
      <p>
        I am Sai Saketh. I am presently pursuing my B.tech in Malla Reddy
        University in the specialization of CSE stream
      </p>
    </div>
  );
}
export default Week1;