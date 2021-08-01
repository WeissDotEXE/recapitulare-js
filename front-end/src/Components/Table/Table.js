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
  "Name",
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
            <td>{employee.name}</td>
            <td>{employee.adress}</td>
            <td>{employee.email}</td>
            <td>{employee.hire_date}</td>
            <td>{employee.salary}</td>
            <td>{employee.job_title}</td>
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
          </tr>
        </Fragment>
      );
    });
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
