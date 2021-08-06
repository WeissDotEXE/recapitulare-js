import React, { Fragment } from "react";
import styles from "../Styles/Home.module.scss";
import image from "../Images/homeImg.svg";

import { useSelector,useDispatch } from "react-redux";

const Home = () => {

  const userStatus=useSelector(state=>state.status);

  let content=null;

  if(userStatus){
    return(
      <div className={styles.home}>
      <div className={styles.left_content}>
        <h1>Vezi proiecte si angajatii</h1>
        <p>O aplicatie creata de Tache Mihnea Cristian</p>
      </div>
      <div className={styles.right_content}>
        <img src={image} />
      </div>
    </div>
    );
  }else{
    return(
      <div className={styles.home}>
      <div className={styles.left_content}>
        <h1>Creaza un cont</h1>
        <p>O aplicatie creata de Tache Mihnea Cristian</p>
      </div>
      <div className={styles.right_content}>
        <img src={image} />
      </div>
    </div>
    );
  }
  return (
    {content}
  );
};

export default Home;
