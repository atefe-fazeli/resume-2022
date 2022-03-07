import React from 'react';
import styles from './Landing.module.css';
import mypic from '../images/mypic.png';
const Landing = () => {
    return (
        <div className={styles.container}>

            <div>
            <h1 className={styles.intro}>Hi! I Am<span> Atefe Fazeli</span></h1>
            </div>
            <div className={styles.piccontainer}>
                {/* <img src={mypic} className={styles.containerimg}/> */}
            </div>
            
            
        </div>
    );
};

export default Landing;