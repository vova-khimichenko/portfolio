import React from 'react'
import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.mainContainer}>
                <span className={styles.mainGreeting}>
                    Меня зовут Вовка Химик +100500 к карме вашей компании
                </span>
            </div>
        </div>
    );
}

export default Main;
