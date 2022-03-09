import React from 'react';
import styles from './Info.module.css';
import { GoLocation } from "react-icons/go";
import { GiNewBorn } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiBigDiamondRing } from "react-icons/gi";
const Info = () => {
    return (
        <div className={styles.container}>
            <div className={styles.firstdiv}>
               <p>
                  <span className={styles.titlehover}>Profile</span><br />
                     <GiNewBorn/> Born : 1996 <br />
                     <GiBigDiamondRing/> Maritial status : Single <br />
                     <BsFillTelephoneFill/> Phone Number: 09139118048 <br />
                     <GoLocation/> Location : Tehran/North-Gorgan <br />
                </p>
            </div>
            <div className={styles.seconddiv}>
                <p><span className={styles.titlehover}>Education</span><br />
                Graduated as a mining engineering from Amirkabir University of technology</p>
            </div>
            <div className={styles.theirddiv}>
                <p><span className={styles.titlehover}>Language</span><br />
                Intermediate at English</p>
            </div>
            <div className={styles.forthdiv}>
               <p><span className={styles.titlehover}>Interests</span><br />
                Front end developing</p>
            </div>
            <div className={styles.fifthdiv}>
                <p> <span className={styles.titlehover}>Courses</span><br />
                Milad Azami react course (+30 hour)</p>
            </div>
            
        </div>
    );
};

export default Info;