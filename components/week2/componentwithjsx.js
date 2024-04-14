import React from "react";
export default function ComponentWithJSX() {
  const name = "M.vaishnavi";
  var cTime = new Date().toTimeString();
  const isLoggedin = true;
  const tag = <h5>Hello, JSX!</h5>;
  const element = (
    <>
      <h1>Heading 1</h1>
<h2>Heading 2</h2>
      <p>Paragraph 1</p>
    </>
  );

  return (
    <div>
      <h2>Displaying My Component with JSX</h2>

      <h5>Example-1 :Atrribute</h5>
      <h5 style={{ color: "red" }}>Department of CSE</h5>
      <h5>
        <hr />
        Example-2 : Expressions
      </h5>
      <h5 style={{ color: "blue " }}>My name is {name}</h5>
      <hr />
      <h5>Example-3 : Functions</h5>
      <h5>displaying current time is {cTime}</h5>

      <hr />
      <h5>Example-4 : Conditional Rendering</h5>
      <h5>{isLoggedin ? "Welcome back!!!!" : "Please log in..."}</h5>
      <hr />
      <h5> Example-5:Fragments</h5>
      {element}
      <hr />
      <h5>Example-6 : Nested Elements</h5>
      <div>
        <h1>Malla Reddy University</h1>

        <h2>Department of CSE</h2>

        <p>Welcome to MERN Stack Classes!!!</p>
      </div>
      <hr />
      <h5>Example-7 :Basic HTML Tags</h5>
      
      <hr />
    </div>
  );
}