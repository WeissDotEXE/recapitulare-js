import React, { Fragment } from "react";
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
  "Project Name",
  "Start Date",
  "Planned End Date",
  "Description",
  "Project_code",
];

const Table = (props) => {
  const employee = props.employee;
  const project = props.project;

  let title = null;
  let employeeContent = null;
  let projectContent = null;


  //conditions for displaying dynamic content
  if (props.page === "employees") {
    title = employeeTitle.map((title) => {
      return <th>{title}</th>;
    });
    employeeContent = employee.map((employee) => {
      return (
        <Fragment>
          <tr className={styles.table_line}>
            <td >{employee.name}</td>
            <td>{employee.adress}</td>
            <td>{employee.email}</td>
            <td>{employee.hire_date}</td>
            <td>{employee.salary}</td>
            <td>{employee.job_title}</td>
            <td><button id={styles.updateBtn} onClick={()=>props.show()}>Update</button></td>
            <td><button id={styles.deleteBtn} onClick={()=>props.deleteItem(employee.id)}>Delete</button></td>
          </tr>
        </Fragment>
      );
    });
  } else if (props.page === "projects") {
    title = projectsTitle.map((title) => {
      return <th>{title}</th>;
    });
    projectContent = project.map((project) => {
      return (
        <Fragment>
          <tr className={styles.table_line}>
            <td>{project.projectName}</td>
            <td>{project.startDate}</td>
            <td>{project.plannedEndDate}</td>
            <td>{project.description}</td>
            <td>{project.projectCode}</td>
            <td><button id={styles.updateBtn} onClick={()=>props.show()}>Update</button></td>
            <td><button id={styles.deleteBtn} onClick={()=>props.deleteItem(project.id)}>Delete</button></td>
          </tr>
        </Fragment>
      );
    });
  }

  //function for deleting an item
  const deleteItem=()=>{

  }

  return (
    <Card className={styles.table_card}>
      <table>
        <tr>{title}</tr>
        {employeeContent}
        {projectContent}
      </table>
    </Card>
  );
};

export default Table;
