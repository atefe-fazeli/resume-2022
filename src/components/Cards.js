import React from 'react';
import styles from './Cards.module.css';
const Cards = (props) => {
    return (
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <p>{props.discription}</p>
        </div>
    );
};

export default Cards;