import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./week5.css";
// import profile from "./profile_image.jpg";
function StudentCard() {
  const [students, fetchDetails] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://sneha2630.github.io/sneha/weeek5%20student%20details%20(3).json"
      );

      const data = await response.json();

      console.log(data);

      fetchDetails(data);
    };

    fetchStudentDetails();
  }, []);
  return (
  <div className="row col-sm-12 g-4 " >
      {/* <h4 >
        Student profile cards fetched from
        
         
        
      </h4> */}
     
      {students.slice(0,5).map((studentCard, index) => (
        <Card
          // style={{ width: "18rem", margin: "6px",borderWidth:"4px",backgroundColor:"aquamarine"}}
          // bg="beige"
          // text="dark"
          // border="dark"
          
          
        >
             
             {/* <Card.Img variant = "top" src = {profile}/> */}
          <Card.Body>
            <Card.Title>{studentCard.Name}</Card.Title><hr/>
            <Card.Subtitle className="mb-2 ">
              {studentCard.RollNo}
            </Card.Subtitle>
            <Card.Text>{studentCard.email}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}


function Week5() {
  return (
    <div className="center">
      <h2>
        WEEK 5 Lab Task Layout
      </h2>
      <hr />
      <StudentCard />
 
    </div>
  );
}
export default Week5;