import React from 'react'
import styles from './Home.module.scss'
import githubIcon from '../../assets/images/github.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'
import telegramIcon from '../../assets/images/telegram.png'
import gmailIcon from '../../assets/images/gmail.png'

function Home() {
    return (
        <div className={styles.home}>
            <h1 className={styles.greeting}>
                Hi, I am <span className={styles.name}>Vladimir Khimichenko</span>
            </h1>
            <span className={styles.aboutMe}>
                  I am a frontend developer
            </span>
            <div className={styles.icons}>
                <a target="_blank" without rel="noopener noreferrer"
                   href={'https://www.linkedin.com/in/vladimir-khimichenko-b26221204/'}>
                    <img className={styles.icon} src={linkedinIcon} alt={'linkedinIcon'}/>
                </a>
                <a target="_blank" without rel="noopener noreferrer"
                   href={'https://github.com/vovkahimik'}>
                    <img className={styles.icon} src={githubIcon} alt={'githubIcon'}/>
                </a>
                <a target="_blank" without rel="noopener noreferrer"
                   href={'https://t.me/vovkahimik'}>
                    <img className={styles.icon} src={telegramIcon} alt={'telegramIcon'}/>
                </a> <
                a target="_blank" without rel="noopener noreferrer"
                  href={'mailto:vovkahimik@gmail.com'}>
                <img className={styles.icon} src={gmailIcon} alt={'gmailIcon'}/>
            </a>
            </div>
        </div>
    );
}

export default Home;
