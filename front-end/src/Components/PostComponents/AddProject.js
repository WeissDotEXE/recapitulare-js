import React, { Fragment, useRef } from "react";
import ReactDOM from "react-dom";

import styles from "../Styles/AddComponent.module.scss";
import Card from "../UI/Card";

const AddProject = (props) => {
  const projectNameRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");
  const descriptionRef = useRef("");
  const projectCodeRef = useRef("");

  const submitHandler = () => {
    const jobData = {
      Project_name: projectNameRef.current.value,
      Start_date: startDateRef.current.value,
      Planned_end_date: endDateRef.current.value,
      Description: descriptionRef.current.value,
      Project_code: projectCodeRef.current.value
    };
    props.postHandler();
    props.closeHandler();
    props.onSaveProjectData(jobData);
  };

  return (
    <Fragment>
      <div onClick={props.closeHandler} className={styles.backdrop}></div>
      <div className={styles.input}>
        <button id={styles.closeBtn} onClick={props.closeHandler}>
          <i class="fas fa-times"></i>
        </button>
        <form onSubmit={submitHandler}>
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            required
            placeholder="Project Name"
            ref={projectNameRef}
          />
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" required ref={startDateRef} />
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" required ref={endDateRef} />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            required
            placeholder="this is a description"
            ref={descriptionRef}
          />
          <label htmlFor="projectCode">Project Code</label>
          <input type="text" id="projectCode" required ref={projectCodeRef} />
          <button id={styles.submitBtn} type="submit">
            Adauga
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddProject;
