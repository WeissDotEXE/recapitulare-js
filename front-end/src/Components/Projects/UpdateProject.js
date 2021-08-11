import React, { Fragment, useState } from "react";
import styles from "../Styles/AddComponent.module.scss";
import Card from "../UI/Card";
const UpdateEmployee = (props) => {
  const employee = props.employee;

  const [name, setName] = useState(employee.name);
  const [adress, setAdress] = useState(employee.adress);
  const [email, setEmail] = useState(employee.email);
  const [hireDate, setHireDate] = useState(employee.hire_date);
  const [salary, setSalary] = useState(employee.salary);
  const [jobTitle, setJobTitle] = useState(employee.job_title);

  const submitHandler = (event) => {
    const employeeData = {
      name: name,
      adress: adress,
      email: email,
      hire_date: hireDate,
      salary: salary,
      job_title: jobTitle,
    };
    props.postHandler();
    props.closeHandler();
    props.onSaveEmployeeData(employeeData);
  };
  return (
    <Fragment>
      <div onClick={props.closeHandler} className={styles.backdrop}></div>
      <div className={styles.input}>
        <button id={styles.closeBtn} onClick={props.closeHandler}>
          <i class="fas fa-times"></i>
        </button>
        <button onClick={() => console.log(employee)}>test</button>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="adress">Adress</label>
          <input
            type="text"
            id="adress"
            required
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="hireDate">Hire Date</label>
          <input
            type="date"
            id="hireDate"
            required
            value={hireDate}
            onChange={(event) => setHireDate(event.target.value)}
          />
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            required
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            required
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
          />
          <button id={styles.submitBtn} type="submit">
            Update
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default UpdateEmployee;
