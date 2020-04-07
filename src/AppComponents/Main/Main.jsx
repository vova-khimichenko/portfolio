import React from 'react'
import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Меня зовут</span>
                    <span>Вовка</span>
                    <span>Химик</span>
                    <span>+100500 к карме вашей компании</span>
                </div>
                <div className={styles.photo}>
                    <img src="../../myPhoto.JPG"
                         alt="не смог добавить фото :("/>
                </div>
            </div>
        </div>
    );
}

export default Main;
