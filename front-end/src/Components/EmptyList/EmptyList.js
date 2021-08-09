import React, { useState } from "react";
import styles from "../Styles/EmptyList.module.scss";

const EmptyList = (props) => {
  return (
    <div className={styles.noProjects}>
      <h1>No Projects</h1>
      <button onClick={props.showAdd}>Add new Project</button>
    </div>
  );
};

export default EmptyList;
