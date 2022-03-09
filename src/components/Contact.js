import React from 'react';
import styles from "./Contact.module.css";
import {FaTelegram ,FaInstagram,FaWhatsapp} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md"; 
import {RiTelegramLine} from "react-icons/ri";
const Contact = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.navbarlist}>
                <li><a  href='https://t.me/fefeFazeli' target="_blank"> <RiTelegramLine className={styles.icon}/>Telegram</a></li>
                <li><a href='mailto:atefefazeli1996@gmail.com' target="_blank" ><MdOutlineMailOutline className={styles.icon}/>Email</a></li>
                <li><a  target="_blank" href='https://wa.me/09307651749'><FaWhatsapp className={styles.icon}/>WhatsApp</a></li>
                <li><a href='https://instagram.com/bochiifazeli' target="_blank"><FaInstagram className={styles.icon}/>Inestgram</a></li>
            </ul>
            
        </div>
    );
};

export default Contact;