import React, { useState } from 'react';
import styles from './Buttons.module.css';
const Buttons = () => {
    const [status, setStatus]=useState(false);
    return (
        <div>
            <button 
            onClick={()=>setStatus(false)}
            className={ status ? styles.unchoosed : styles.choosed}
            >What I Learned</button>
            <button  
            onClick={()=>setStatus(true)}
            className={ status ? styles.choosed : styles.unchoosed}
            >What I Am Going To Learn</button>
        </div>
    );
};

export default Buttons;