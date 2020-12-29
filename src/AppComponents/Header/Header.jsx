import React from 'react';
import styles from './Header.module.css'
import miPhoto from '../../assets/miPhotoHeader.jpg'

function Header() {
    const year = new Date().getFullYear()
    return (
        <div className={styles.headerBlock}>
            <div className={styles.miPhotoContainer}>
                <img className={styles.miPhoto} src={miPhoto} alt={''}/>
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
                © {year} <span className={styles.mi}>VovkaHimik</span>
            </div>
        </div>
    )
}

export default Header;
