import React from 'react';
import Card from '../UI/Card';
import styles from "../Styles/Register.module.scss";

import { useDispatch } from 'react-redux';

const Login=()=>{

    const dispatch=useDispatch();

    return(
        <Card className={styles.register_login} >
            <h1 id={styles.header_txt}>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
                <button id={styles.submitBtn} type="submit" >Log In</button>
            </form>
        </Card>
    )
}

export default Login;