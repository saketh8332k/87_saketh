import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
function PropsComponentWithOneAttribute(props) {
  return (
    <div>
      <h2>
        Rendering a single attribute 
        
      </h2>
      
      
      <h2>
        My name is {" "}
        <span style={{color:"green"}}>{props.study}</span>
      </h2>
      <hr/>
      
    </div>
    
    
  );
}

function PropsComponentWithMultiAttribute(props) {
  return (
    <div className="component width">
      <h2>
        Rendering multiple attribute 
      </h2>
      <h2 style={{ color: "dark" }}>
        I am pursuing<span >{props.name}</span>
      </h2>
      <h2 style={{ color: "dark" }}>
        My Roll Number is{" "}
        <span>{props.rno}</span>
      </h2>
    </div>
  );
}
function StudentDetails(props) {         
  const student = props.student;
  return (
    <div  class="text-center center" style={{border:"solid black 5px"}}>
      <h2>
        Student Details using Props{" "}
      </h2>
        <Table striped bordered hover  variant="primary">
        {/* <thead> */}
        {/* <tr class="table-info" > */}
        {/* <th scope="col"><span style={{ color: 'coral' }}>Student ID</span></th>
        <th scope="col"><span style={{ color: 'seagreen' }}>Name of the Student</span></th>
        <th scope="col"><span style={{ color: 'grey' }}>Email</span></th> */}
        {/* </tr> */}
          <tr class="table-seconary">
            <th>Student ID</th>
            <th>Name of the Student</th>
            <th>Email</th>
          </tr>
        {/* </thead> */}
        <tbody>
          {student.map((student) => (
            <tr>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.semail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function EmpDetails(props) {
  const employee = props.employee;
  return (
    <div class="text-center center" style={{border:"solid black 5px"}}>
      <h2>
        Employee Details using Props{" "}
      </h2>
      <Table striped bordered hover  variant="primary">
        <thead>
        <tr class="table-info" >
        <th scope="col"><span style={{ color: 'coral' }}>Employee ID</span></th>
        <th scope="col"><span style={{ color: 'seagreen' }}>Name of the Employee</span></th>
        <th scope="col"><span style={{ color: 'grey' }}>Designation</span></th>
        </tr>
          
          <tr>
            <th>Employee ID</th>
            <th>Name of the Employee</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function Week3() {
  
  const student = [
    { sid: "cs387", sname: "saketh", semail: "saketh@gmail.com" },
    { sid: "cs364", sname: "saida", semail: "saida@gmail.com" },
    { sid: "cs390", sname: "prabhu", semail: "prabhu@gmail.com" },
    {
      sid: "cs0396",
      sname: "Siddharth Nandan Saaho",
      semail: "namesaaho@gmail.com",
    },
  ];
  const emp = [
    { eid: "cse899490", ename: "ashish", designation: "professor" },
    {
      eid: "cse325686",
      ename: "chakri",
      designation: "Asst Professor",
    },
    { eid: "cse898478", ename: "Raghav", designation: "CEO" },
    {
      eid: "cse599689",
      ename: "Karthik",
      designation: "Dean",
    },
  ];
  return (
    <div className="body-component">
      <hr />
      <h2>
        WEEK - 3 MERN STACK LAB TASK :
        Rendering Components using Props
      </h2>
      <hr/>
      <PropsComponentWithOneAttribute color="Black"
       study="M. Sai Saketh" />
      <br />
      <PropsComponentWithMultiAttribute color="black"
        name=" B.Tech"
        rno=" 2211cs010387"
      />
      <hr />
     
      <StudentDetails student={student} />
      <hr />
      
      {/* <EmpDetails employee={emp} /> */}
      <hr />
     
    </div>
  );
}
export default Week3;
