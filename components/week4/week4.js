import React, { useState, useEffect } from "react";
import "./week4.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Table from "react-bootstrap/Table";
function UseStateExample() {
  const name = null;
  const rno = null;
  const [details, setDetails] = useState(
    <div style={{backgroundColor:"aquamarine"}}>
      <h3>Name: {name}</h3>
      <h3>Roll No: {rno}</h3>
    </div>
  );
  const getDetails = () => {
    const name = "Sneha";
    const rno = "2211cs010390";
    setDetails(
      <div style={{backgroundColor:"pink"}}>
        <h3>Name: {name}</h3>
        <h3>Roll No: {rno}</h3>
      </div>
    );
  };
  return (
    <div className="container">
      <h2 style={{ fontFamily:"cursive",textDecorationLine:"underline"}}>
        Week 4
      </h2>
      <h2 style={{ fontFamily:"cursive"}}>Use State Example</h2>
      <div className="body-component-function">
        <h3>{details}</h3>

        <button onClick={getDetails} style={{borderRadius:"12px"}}>Click to get Details</button>
      </div>
    </div>
  );
}
const UseEffectExample1 = () => { 
  const [count, setcount] = useState(0); 
 
  useEffect(() => { 
    //console.log(count); 
    console.log('"constraint-1"'); 
  }); 
 
  return ( 
    <div> 
      <h4 style={{ fontFamily:"cursive"}}> 
      Use effect example using only call back 
      </h4> 
      <p> 
        you clicked {count} times{console.log("Inside Component....")}{" "} 
      </p> 
 
      <button onClick={() => setcount(count + 1)} style={{borderRadius:"50px"}}>increment</button> 
    </div> 
  ); 
};


function UseEffectExample2() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    //console.log(count); 
    console.log('"constraint-2"');
  }, []);

  return (
    <div>
      <h4 style={{ fontFamily:"cursive" }}>
      Use effect example using empty dependency
      </h4>
      <p>
        you clicked {count} times{console.log("Inside Component....")}{" "}
      </p>

      <button onClick={() => setcount(count + 1)} style={{borderRadius:"12px"}}>increment</button>
    </div>
  );
} ;
const UseEffectExample3 = () => { 
  const [count, setcount] = useState(0); 
 
  useEffect(() => { 
    //console.log(count); 
 
    console.log('"constraint-3"'); 
  }, [count]); 
 
  return ( 
    <div> 
      <h4 style={{ fontFamily:"cursive"}}> 
      useEffect triggers based on state variable or props 
      </h4> 
      <p> 
        you clicked {count} times{console.log("Inside Component....")}{" "} 
      </p> 
 
      <button onClick={() => setcount(count + 1)} style={{borderRadius:"12px"}}>increment</button> 
    </div> 
  ); 
}; 

 

  function Week4() { 
    return ( 
      // className="body-component" 
      <div> 
        <div style={{backgroundColor:"aquamarine"}}>
        <UseStateExample />
        <br /> 
        <hr /> 
        </div><div style={{backgroundColor:"beige"}}>
        <UseEffectExample1 /> 
        <hr /> 
        </div><div style={{backgroundColor:"skyblue"}}>
        <UseEffectExample2 /> 
        <hr /> 
        </div>
        <UseEffectExample3 /> 
        <hr/>

      </div> 
    ); 
  } 
  
export default Week4;