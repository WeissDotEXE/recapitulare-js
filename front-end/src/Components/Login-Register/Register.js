import React, { useState, useRef } from "react";

import styles from "../Styles/Register.module.scss";
import Card from "../UI/Card";

//import for redux
import { useDispatch } from "react-redux";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");

  const dispatch = useDispatch();

  const registerHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log("succes reg");
      dispatch({ type: "logIn" });
    } else if (password !== confirmPassword) {
      console.log("Your passwords are different!");
    }
  };
  return (
    <Card className={styles.register_login}>
      <h1 id={styles.header_txt}>Register</h1>
      <form onSubmit={registerHandler}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          onChange={(event) => setPassWord(event.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          required
          onChange={(event) => setConfirmPassWord(event.target.value)}
        />
        <button id={styles.submitBtn} type="submit">
          Register
        </button>
      </form>
    </Card>
  );
};

export default Register;
