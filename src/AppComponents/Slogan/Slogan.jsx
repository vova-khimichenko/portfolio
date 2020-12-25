import React from 'react';
import styles from './Slogan.module.css'

function Slogan() {
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

export default Slogan;
