import React from 'react';
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.navbarlist}>
                <li><a href='#'>Telegram</a></li>
                <li><a href='#'>Email</a></li>
                <li><a href='#'>WhatsApp</a></li>
                <li><a href='#'>Inestgram</a></li>
            </ul>
            
        </div>
    );
};

export default Contact;