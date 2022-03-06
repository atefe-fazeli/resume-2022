import React, { useState } from 'react';
import Contact from './Contact';
import styles from './Navbar.module.css';

const Navbar = () => {

    const[open,setOpen]=useState(false);

    return (
        <div className={styles.container} >
            <h1>Resume</h1>
            <button onClick={()=>setOpen(!open)} className={styles.button}>Contact Me </button>
            {open && <Contact />}
        </div>
    );
};

export default Navbar;