import React from 'react';
import styles from './About.module.css'

function About() {
    return (
        <div className={styles.sloganBlock}>
            <div className={styles.sloganContainer}>
                <span className={styles.sloganTitle}>
                        Рассматриваю варианты удалённой работы
                </span>
                <button className={styles.button}
                        type="button">Нанять меня
                </button>
            </div>
        </div>
    );
}

export default About;
