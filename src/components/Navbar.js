import React, { useState } from 'react';
import Contact from './Contact';

const Navbar = () => {

    const[open,setOpen]=useState(false);

    return (
        <div>
            <h1>Resume</h1>
            <button onClick={()=>setOpen(!open)}>Contact Me </button>
            {open && <Contact />}
        </div>
    );
};

export default Navbar;