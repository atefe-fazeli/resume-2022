import React from 'react';
import styles from "./Contact.module.css";
import {FaTelegram ,FaInstagram,FaWhatsapp} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md"; 
import {RiTelegramLine} from "react-icons/ri";
const Contact = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.navbarlist}>
                <li><a href='#'> <RiTelegramLine className={styles.icon}/>Telegram</a></li>
                <li><a href='#'><MdOutlineMailOutline className={styles.icon}/>Email</a></li>
                <li><a href='#'><FaWhatsapp className={styles.icon}/>WhatsApp</a></li>
                <li><a href='#'><FaInstagram className={styles.icon}/>Inestgram</a></li>
            </ul>
            
        </div>
    );
};

export default Contact;