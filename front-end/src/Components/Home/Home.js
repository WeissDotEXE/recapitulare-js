import React from "react";
import styles from "../Styles/Home.module.scss";
import image from "../Images/homeImg.svg";

const Home = () => {
  return (
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
};

export default Home;
