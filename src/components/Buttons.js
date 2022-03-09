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
             discription="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."         
            /> 
               <Cards 
            title="TDD"
             discription="How to write tests for React components"         
            /> 

            </div>:
            <div className={styles.cardcontainer}> 
            <Cards 
            title="HTML (Intermediate)"
             discription="I know about HTML4 and HTML5 tags."         
            />
            <Cards 
            title="CSS (Intermediate)"
             discription="I know how to style web pages with basic CSS properties,FlexBox,Animation. "         
            />
             <Cards 
            title="Bootstrap (beginner)"
             discription="Quickly design and customize responsive mobile-first sites with Bootstrap."         
            />
            <Cards 
            title="JS (Intermediate)"
             discription="Fundamental and some advance topics like async, await, promise and etc."         
            />
            <Cards 
            title="React (Intermediate)"
             discription="Fundamental and some libraries  like axios, react-router-dom, react-icons, Radium, hooks and etc."         
            />
            <Cards 
            title="git and github (Intermediate)"
             discription="Fundamental git bash codes about add, commit, branches and etc."         
            />
            <Cards 
            title="Adobe Xd (above beginner)"
             discription="I know how to design web pages and some basic xd animations"         
            />
            </div> 
              }
           
        </div>
        </div>
    );
};

export default Buttons;