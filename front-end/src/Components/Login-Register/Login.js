import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "../Styles/Register.module.scss";

import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler=(event)=>{
      event.preventDefault();
      
  }

  return (
    <Card className={styles.register_login}>
      <h1 id={styles.header_txt}>Login</h1>
      <form onSubmit={loginHandler}>
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
          onChange={(event) => setPassword(event.target.value)}
        />
        <button id={styles.submitBtn} type="submit">
          Log In
        </button>
      </form>
    </Card>
  );
};

export default Login;
