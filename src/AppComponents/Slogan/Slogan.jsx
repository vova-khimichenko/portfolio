import React from 'react';
import styles from './Slogan.module.css'

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.top}>
                        Рассматриваю варианты удалённой работы
                </div>
                    <button className={styles.button}
                            type="button">Нанять меня
                    </button>
            </div>
        </div>
    );
}

export default Slogan;
