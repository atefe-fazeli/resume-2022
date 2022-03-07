import React from 'react';
import styles from './Landing.module.css';
import mypic from '../images/mypic.png';
const Landing = () => {
    return (
        <div className={styles.container}>

            <div>
            <h1>Hi! I Am<span> Atefe Fazeli</span></h1>
            </div>
            <div>
                <img src={mypic}/>
            </div>
            
            
        </div>
    );
};

export default Landing;