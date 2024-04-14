import React, { useState } from "react";
import "./week6.css";
const Week6 = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState("default");
  const handleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };
  const LoginComponent = () => {
    return (
      <div className="container" >
        <h1>WEEK6 : MERN STACK LAB TASK</h1>
        <hr/>
      
        <h2 style={{ color: "black" , textShadow: "4px 4px 6px #000000"}}>
          Displaying Ternary Operators component
        </h2>
        <button onClick={handleLogin} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px", }}>Login</button>
        <h3 style={{ color: "red", textShadow: "2px 2px 8px #000000" }}>Click to Login</h3>
        <h3 style={{ color: "blue", textShadow: "2px 2px 8px #000000" }}>Displaying Login Component</h3>
      </div>
    );
  }; 
  const WelcomeComponent = () => {
    return (
      // className="body-component"
      <div>
        <h2 style={{ color: "black", textShadow: "2px 2px 8px #000000" }}>
          Displaying Ternary Operators component
        </h2>
        <h3 style={{ color: "tomato" ,textShadow: "2px 2px 8px #000000"}}>Welcome back </h3>
        <h3 style={{ color: "teal" ,textShadow: "2px 2px 8px #000000"}}>Displaying Welcome Component</h3>
        <button onClick={handleLogin} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px", }}>Logout</button>
      </div>
    );
  };
  const LogicalOperatorComponent = () => {
    const WelcomeComponent = () => {
      return (
        <div>
          <h3 style={{ color: "dark" ,}}>
            Hey{" "}
            <span style={{ color: "red" }}>2211cs010387</span>{" "}
            <h3 style={{ color: "dark" ,}}>
              You are logged in!!!
            </h3>
          </h3>
        </div>
      );
    };
    return <div>{isLoggedIn && <WelcomeComponent />}</div>;
  };
  const TernaryOperatorComponent = () => {
    return <div>{isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}</div>;
  };
  const ifElseOperatorComponent = (isLoggedIn) => {
    const LoginComponent = () => {
      return (
        // className="body-component"
        <div>
          <h2 style={{ color: "black", textShadow: "2px 2px 8px #000000" }}>
            Displaying IF- ElSE Condition component
          </h2>
         
        </div>
      );
    };
    const WelcomeComponent = () => {
      return (
        // className="body-component"
        <div>
          <h2
            style={{
              color: "black",textShadow: "2px 2px 8px #000000"
            }}
          >
            Displaying IF- ElSE Condition component
          </h2>
          <h3 style={{ color: "tomato" }}>Welcome back </h3>
          <h3 style={{ color: "teal" }}>Displaying Welcome Component</h3>
        </div>
      );
    };
    if (isLoggedIn) {
      return <WelcomeComponent />;
    } else {
      return <LoginComponent />;
    }
  };

  const SwitchComponent = () => {
    const DefaultComponent = () => {
      const handleUser = () => {
        setActiveComponent("user");
      };
      const handleAdmin = () => {
        setActiveComponent("admin");
      };
      return (
        <div>
          <h2 style={{ color: "red" }}>
            This is Default Dashboard component
          </h2>
          <button onClick={handleUser} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px", }}>Switch to User</button>{" "}
          <button onClick={handleAdmin} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px", }} >Switch to Admin</button>
        </div>
      );
    };
    const AdminComponent = () => {
      const handleUser = () => {
        setActiveComponent("user");
      };
      const handleDefault = () => {
        setActiveComponent("default");
      };

      return (
        <div>
          <h3 style={{ color: "palevioletred" }}>Displaying Admin Component</h3>
          <button onClick={handleUser} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px"}}>Switch to User</button>{" "}
          <button onClick={handleDefault} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px"}}>Switch to Default</button>
        </div>
      );
    };
    const UserComponent = () => {
      const handleAdmin = () => {
        setActiveComponent("admin");
      };
      const handleDefault = () => {
        setActiveComponent("default");
      };
      return (
        <div>
          <h3 style={{ color: "palevioletred" }}>This is User Component</h3>
          <button onClick={handleDefault} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px"}}>Switch to Default</button>{" "}
          <button onClick={handleAdmin} style={{borderRadius:"12px", color:"red",width:"240px",height:"50px"}}>Switch to Admin</button>
        </div>
      );
    };

    switch (activeComponent) {
      case "admin":
        return <AdminComponent />;
      case "user":
        return <UserComponent />;
      default:
        return <DefaultComponent />;
    }
  };
  const ListComponent = () => {
    const students = [
      {
        student:<span style={{color:"green"}}>Student-1 details ;</span>,
        name:<span style={{color:"blue"}}> Saketh</span>,
        rno: "2211cs010387",
        group: "7(A)",
        subjects: ["1.MERN STACK ", "2.DATA MINING", "3.OPERATING SYSTEMS", "4.PROBABILITY AND STATISTICS", "5.ADVANCE DTA STRUCTURES", "6.COMPUTER ORGANISATION AND ORGANISATION","7.ENVIRONMENTAL SCIENCES"],
      },
      {
        student:<span style={{color:"green"}}> Student-2 details ;</span>,
        name:<span style={{color:"blue"}}> Pavan</span>,
        rno: "2211cs010421",
        group: "7(B)",
        subjects: ["1.MERN STACK ", "2.DATA MINING", "3.OPERATING SYSTEMS", "4.PROBABILITY AND STATISTICS", "5.ADVANCE DTA STRUCTURES", "6.COMPUTER ORGANISATION AND ORGANISATION","7.ENVIRONMENTAL SCIENCES"],

      },
    ];
    return (
      // className="body-component"
      <div style={{backgroundColor:"aquamarine"}}>
        <h2 style={{ color: "black" }}>
          Rendering Student Details using
          map() method.
        </h2>
        <div className="box">
          {students.map((Student, index) => (
            <div className="center body-card">
              <div>
                <h3  style={{ textDecorationLine: "underline" }} >
                  {Student.student}
                </h3>
                <h3>{Student.name}</h3>
                <h3>{Student.rno}</h3>
                <h3>{Student.group}</h3>
              </div>
              <h3 style={{ textDecorationLine: "underline" }}>Subjects</h3>
              <div>
                {Student.subjects.map((studentDetails, index) => (
                  <div key={index}>
                    <h3>{studentDetails}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    );
  };
  return (
    // className="body-component"
    // className="body-component"
    // className="component width"
    <div>
      <TernaryOperatorComponent />
      <hr />
      <div>
        <h2 style={{ color: "black", textShadow: "2px 2px 8px #000000" }}>
          Displaying Logical operator component
        </h2>
        <LogicalOperatorComponent />
      </div>
      <hr />
      {ifElseOperatorComponent(isLoggedIn)}
      <hr />
      <div>
        <h2 style={{ color: "black" ,textShadow: "2px 2px 8px #000000"}}>Displaying Switch Case Component</h2>
        {SwitchComponent()}
      </div>
      <hr />
      <ListComponent />
      <br />
    </div>
  );
};
export default Week6;