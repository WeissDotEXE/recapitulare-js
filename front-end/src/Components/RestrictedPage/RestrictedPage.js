import React from 'react';
import styles from '../Styles/RestrictedPage.module.scss';
import {Link} from 'react-router-dom';
const RestrictedPage=()=>{
    return(
        <div className={styles.RestrictedPage}>
            <i class="fas fa-exclamation"></i>
            <h1>You don't have acces to this page without an account</h1>
            <Link className={styles.redirectBtn} to='/login'><button>Log in</button></Link>
            <Link className={styles.redirectBtn} to='/register'><button>Register</button></Link>
        </div>
    );
}

export default RestrictedPage;