import React from 'react'
import styles from './Greeting.module.css'

function Greeting() {
    return (
        <div className={styles.greeting}>
            <span>Меня зовут Вовка Химик +100500 к карме вашей компании</span>
        </div>
    );
}

export default Greeting;
