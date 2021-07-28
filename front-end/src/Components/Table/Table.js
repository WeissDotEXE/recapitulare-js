import React from "react";
import styles from "../Styles/Table.module.scss";
import Card from "../UI/Card";
const employeeTitle = [
  "Name",
  "Adress",
  "Email",
  "Hire Date",
  "Salary",
  "Job Title",
];
const projectsTitle = [
  "Name",
  "Start Date",
  "Planned End Date",
  "Description",
  "Project_code",
];

const Table = (props) => {

  let title=null;
  if(props.page==="employees"){
    title=employeeTitle.map(title=>{
      return <th>{title}</th>
    })
  }
  else if(props.page==="projects"){
    title=projectsTitle.map(title=>{
      return <th>{title}</th>
    })
  }
  return (
    <Card>
      <table>
        <tr>
          {title}
        </tr>
        
      </table>
    </Card>
  );
};

export default Table;
