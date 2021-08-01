import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from '../Styles/AddComponent.module.scss'
import Card from "../UI/Card";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card>
      <h1>Add Project card</h1>
    </Card>
  );
};

const AddProject = (props) => {
  <Fragment>
    {ReactDOM.createPortal(
      <Backdrop />,
      document.getElementById("backdrop-root")
    )}
    {ReactDOM.createPortal(
      <ModalOverlay />,
      document.getElementById("overlay-root")
    )}
  </Fragment>;
};

export default AddProject;
