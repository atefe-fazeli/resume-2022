import React, { useState } from 'react';
import styles from './Buttons.module.css';
import Cards from './Cards';
const Buttons = () => {
    const [status, setStatus]=useState(false);
    return (
        <div className={styles.container}>
        <div className={styles.buttonscontainer}>
            <button 
            onClick={()=>setStatus(false)}
            className={ status ? styles.unchoosed : styles.choosed}
            >What I Learned</button>
        
            <button  
            onClick={()=>setStatus(true)}
            className={ status ? styles.choosed : styles.unchoosed}
            >What I Am Going To Learn</button>
        </div>
        <div >
            {status ? 
            <div className={styles.cardcontainer}>  
            <Cards 
            title="REDUX (Learning)"
             discription= "A Predictable State Container for JS Apps"      
            /> 
              <Cards 
            title="Tailwind"
             discription="dfhdfhfhfgjhkhgguftcfgcabn anandndkscbskcsokc;sck"         
            /> 
            </div>:
            <div className={styles.cardcontainer}> 
            <Cards 
            title="HTML"
             discription="dfhdfhfhfgjhkhgguftcfgcabn ana"         
            />
            <Cards 
            title="HTML"
             discription="dfhdfhfhfgjhkhgguftcfgcabn ana"         
            />
             <Cards 
            title="HTML"
             discription="dfhdfhfhfgjhkhgguftcfgcabn ana"         
            />
            <Cards 
            title="HTML"
             discription="dfhdfhfhfgjhkhgguftcfgcabn ana"         
            />
            </div> 
              }
           
        </div>
        </div>
    );
};

export default Buttons;