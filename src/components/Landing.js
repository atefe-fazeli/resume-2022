import React from 'react';
import styles from './Landing.module.css';
import Mypic from "./Mypic.png";
const Landing = () => {
    return (
        <div className={styles.container}>

            <div>
            <h1 className={styles.intro}>Hi! I Am<span> Atefe Fazeli</span></h1>
            <p className={styles.paragraph}>Junior React Developer</p>
            </div>
            <div className={styles.imagecontainer} >
                <img src={Mypic} alt="PIC" className={styles.containerimg}/>
            </div>
            
            
        </div>
    );
};

export default Landing;