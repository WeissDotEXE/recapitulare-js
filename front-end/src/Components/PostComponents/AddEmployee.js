import React, { Fragment, useRef } from "react";
import { ReactDOM } from "react-dom";

import styles from "../Styles/AddComponent.module.scss";
import Card from "../UI/Card";

const AddEmployee = (props) => {
  const nameRef = useRef("");
  const adressRef = useRef("");
  const emailRef = useRef("");
  const hireDateRef = useRef("");
  const salaryRef = useRef("");
  const jobTitleRef = useRef("");

  const submitHandler = () => {
    const employeeData = {
      name: nameRef.current.value,
      adress: adressRef.current.value,
      email: emailRef.current.value,
      hire_date: hireDateRef.current.value,
      salary: salaryRef.current.value,
      job_title: jobTitleRef.current.value
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
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="John"
            ref={nameRef}
          />
          <label htmlFor="adress">Adress</label>
          <input
            type="text"
            id="adress"
            required
            placeholder="Bucuresti"
            ref={adressRef}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="test@gmail.com"
            ref={emailRef}
          />
          <label htmlFor="hireDate">Hire Date</label>
          <input type="date" id="hireDate" required ref={hireDateRef} />
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            required
            placeholder="9000"
            ref={salaryRef}
          />
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            required
            placeholder="programmer"
            ref={jobTitleRef}
          />
          <button id={styles.submitBtn} type="submit">
            Adauga
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddEmployee;
