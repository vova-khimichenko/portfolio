import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.headerBlock}>
            <div className={styles.miPhotoContainer}>

            </div>
            <div className={styles.navMenu}>
                <a href='/home'
                   className={styles.link}>Home</a>
                <a href='/about'
                   className={styles.link}>About</a>
                <a href='/skills'
                   className={styles.link}>Skills</a>
                <a href='/projects'
                   className={styles.link}>Projects</a>
                <a href='/contacts'
                   className={styles.link}>Contacts</a>
            </div>
            <div className={styles.copyright}>
                © 2020 VovkaHimik
            </div>
        </div>
    );
}

export default Header;
