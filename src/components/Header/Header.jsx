import React from 'react';
import styles from './Header.module.css'
import avaPhoto from '../../assets/images/myPhoto.jpg'

function Header() {
    const year = new Date().getFullYear()
    return (
        <div className={styles.header}>
            <div className={styles.photoBlock}>
                <img className={styles.photo} src={avaPhoto} alt={'avaPhoto'}/>
            </div>
            <nav className={styles.navMenu}>
                <a href={'/home'} className={styles.link}>Home</a>
                <a href={'/about'} className={styles.link}>About</a>
                <a href={'/skills'} className={styles.link}>Skills</a>
                <a href={'/projects'} className={styles.link}>Projects</a>
                <a href={'/contacts'} className={styles.link}>Contacts</a>
            </nav>
            <div className={styles.copyright}>
                © {year} <span className={styles.userName}>vovkahimik</span>
            </div>
        </div>
    )
}

export default Header;
