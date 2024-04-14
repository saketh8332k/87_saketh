import React from "react";
import Table from "react-bootstrap/Table";
import "./Week2.css";
import "bootstrap/dist/css/bootstrap.min.css";
function MyFunctionComponent() {
    const studentDetails =[
      {
        "Sname": "vaishnavi",
        "SId": "1234456",
        "Department": "Computer Science",
        "Section": "sigma"
      },
      {
        "Sname": "sri",
        "SId": "66666",
        "Department": "Electrical Engineering",
        "Section": "omega"
      },
     
    ]
    return (
      <div class="center">
        <h3>Displaying My Function Component</h3>
        <h3>Student Details </h3>
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Student name</th>
              <th>Department</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((student, index) => (
              <tr data-index={index}>
                <td>{student.SId}</td>
                <td>{student.Sname}</td>
                <td>{student.Department}</td>
                <td>{student.Section}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  export default MyFunctionComponent;