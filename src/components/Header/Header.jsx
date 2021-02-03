import React from 'react';
import styles from './Header.module.scss'
import photoAva from '../../assets/images/myPhoto.jpg'

function Header() {
    const year = new Date().getFullYear()
    return (
        <div className={styles.header}>
            <div className={styles.photoBlock}>
                <img className={styles.photoAva} src={photoAva} alt={'photoAva'}/>
            </div>
                <nav className={styles.navLinks}>
                <a href={'/home'} className={styles.link}>Home</a>
                <a href={'/skills'} className={styles.link}>Skills</a>
                <a href={'/projects'} className={styles.link}>Portfolios</a>
                <a href={'/contacts'} className={styles.link}>Contact</a>
            </nav>
            <div className={styles.copyright}>
                © {year} <span className={styles.userName}>vovkahimik</span>
            </div>
        </div>
    )
}

export default Header;
