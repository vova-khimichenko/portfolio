import React from 'react'
import styles from './Greeting.module.css'

function Greeting() {
    return (
        <div className={styles.greeting}>
            <span>Меня зовут</span>
            <span>Вовка</span>
            <span>Химик</span>
            <span>+100500 к карме вашей компании</span>
        </div>
    );
}

export default Greeting;
