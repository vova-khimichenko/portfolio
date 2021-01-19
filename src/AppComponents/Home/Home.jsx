import React from 'react'
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.greeting}>
                Hi, I am <span className={styles.name}>Vladimir Khimichenko</span>
            </h1>
            <span className={styles.aboutMe}>
                  I am a frontend developer
            </span>
        </div>
    );
}

export default Home;
