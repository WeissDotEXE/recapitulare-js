import React from 'react';

import styles from '../Styles/Register.module.scss';
import Card from '../UI/Card';

const Register=()=>{
    return(
        <Card className={styles.register_login} >
            <h1 id={styles.header_txt}>Register</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password"/>
                <button id={styles.submitBtn} type="submit" >Register</button>
            </form>
        </Card>
    );
}

export default Register;