import React from 'react';
import styles from './Contact.module.scss'
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contact() {
    return (
        <div className={styles.page}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Call me</h2>
                <span className={styles.titleShadow}>Call me</span>
            </div>
            <div className={styles.businessCards}>
                <span className={styles.card}></span>
                <span className={styles.card}></span>
                <span className={styles.card}></span>
                <span className={styles.card}></span>
                <span className={styles.card}>
                    <FontAwesomeIcon className={styles.icon} icon={faMobileAlt}/>   <a href={'+375295169670'}>+375-29-516-96-70</a>

                </span>
            </div>
        </div>
    );
}

export default Contact;
