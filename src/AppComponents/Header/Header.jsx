import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.headerBlock}>
            <div className={styles.headerContainer}>
                <div className={styles.navMenu}>
                    <a href=""
                       className={styles.link}>General</a>
                    <a href=''
                       className={styles.link}>Skills</a>
                    <a href=''
                       className={styles.link}>Projects</a>
                    <a href=''
                       className={styles.link}>Contacts</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
