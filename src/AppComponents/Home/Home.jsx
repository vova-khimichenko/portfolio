import React from 'react'
import styles from './Home.module.css'
import githubIcon from '../../assets/images/github.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'
import telegramIcon from '../../assets/images/telegram.png'
import facebookIcon from '../../assets/images/facebook.png'

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.greeting}>
                Hi, I am <span className={styles.name}>Vladimir Khimichenko</span>
            </h1>
            <span className={styles.aboutMe}>
                  I am a frontend developer
            </span>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={githubIcon} alt={'githubIcon'}/>
                <img className={styles.icon} src={linkedinIcon} alt={'linkedinIcon'}/>
                <img className={styles.icon} src={telegramIcon} alt={'telegramIcon'}/>
                <img className={styles.icon} src={facebookIcon} alt={'facebookIcon'}/>
            </div>
        </div>
    );
}

export default Home;
