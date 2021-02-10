import React from 'react';
import styles from './Header.module.scss'
import photoAva from '../../assets/images/myPhoto.jpg'
import {NavLink} from "react-router-dom";

function Header(props) {

    const year = new Date().getFullYear()

    return (
        <div className={styles.header}>
            <div className={styles.photoBlock}>
                <img className={styles.photoAva} src={photoAva} alt={'photoAva'}/>
            </div>
            <nav className={styles.navLinks} onClick={props.toggling}>
                <NavLink to={'/home'} className={styles.link}>Home</NavLink>
                <NavLink to={'/skills'} className={styles.link}>Skills</NavLink>
                <NavLink to={'/projects'} className={styles.link}>Projects</NavLink>
                <NavLink to={'/contacts'} className={styles.link}>Contact</NavLink>
            </nav>
            <div className={styles.copyright}>
                © {year} <span className={styles.userName}>vovkahimik</span>
            </div>
        </div>
    )
}

export default Header;
