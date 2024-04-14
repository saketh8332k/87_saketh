import React from "react";
import Table from "react-bootstrap/Table";
import "./Week2.css";
import "bootstrap/dist/css/bootstrap.min.css";
class MyClassComponent extends React.Component {
    render() {
      const employeeDetails = [
        {
          "Ename": "ravi",
          "EId": "141276",
          "Department": "Computer Science",
          "gender": "Male"
        },
        {
          "Ename": "swathi",
          "EId": "327461",
          "Department": "Electrical Engineering",
          "gender": "Female"
        },
       
      ]
      return (
        <div class="text-center center">
          <h3>Displaying My Class Component</h3>
          <h3>Employee Details </h3>
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>Employee name</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {employeeDetails.map((emp, index) => (
                <tr data-index={index}>
                    <td>{emp.EId}</td>
                  <td>{emp.Ename}</td>
                  <td>{emp.Department}</td>
                  <td>{emp.gender}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
  export default MyClassComponent;