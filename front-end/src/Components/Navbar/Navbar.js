import React, { Fragment } from "react";
import styles from "../Styles/Navbar.module.scss";
import { Link } from "react-router-dom";

//import for redux
import { useSelector,useDispatch } from "react-redux";
//import { userActions } from "../../redux";
const Navbar = () => {

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.status);

  const logOutHandler=()=>{
    // dispatch(userActions.userStatus());
    dispatch({type:'userStatus'});
  }

  //variable for conditional content(links)
  let links = null;
  if (userStatus===true) {
    links = (
      <Fragment>
        <li class="nav-item">
          <Link className={styles.links} to="/employees">
            Angajati
          </Link>
          
        </li>
        <li class="nav-item">
          <Link className={styles.links} to="/projects">
            Proiecte
          </Link>
        </li>
        <button id={styles.logOutBtn} onClick={logOutHandler}>Log out</button>
      </Fragment>
    );
  } else if(userStatus===false){
    links = (
      <Fragment>
        <li>
          <Link className={styles.links} to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="/register">
            Register
          </Link>
        </li>
      </Fragment>
    );
  }

  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <Link id={styles.logo} to="/">
          Logo
        </Link>
        {links}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav"></ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
