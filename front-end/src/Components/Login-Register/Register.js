import React, { useState, useRef } from "react";

import styles from "../Styles/Register.module.scss";
import Card from "../UI/Card";

//import for redux
import { useSelector, useDispatch } from "react-redux";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [postUserData, setPostUserData] = useState();

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.status);

  const registerHandler = async (event) => {
    event.preventDefault();
    
    if (password === confirmPassword) {
      await fetch("http://localhost:4000/api/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
      dispatch({ type: "userStatus" });
      console.log("succes");
    } else if (password !== confirmPassword) {
      console.log("Your passwords are different!");
    }
  };
  return (
    <Card className={styles.register_login}>
      <h1 id={styles.header_txt}>Register</h1>
      <form onSubmit={registerHandler}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button id={styles.submitBtn} type="submit">
          Register
        </button>
      </form>
    </Card>
  );
};

export default Register;
