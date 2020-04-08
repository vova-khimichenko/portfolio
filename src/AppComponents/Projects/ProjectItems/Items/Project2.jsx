import React from 'react';
import styles from './Project.module.css'

function Project2() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <button className={styles.button}
                        type="button">Смотреть
                </button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.nameProject}>
                    Название проекта
                </div>
                <div className={styles.descriptionProject}>
                    Краткое описание проекта
                </div>
            </div>
        </div>
    );
}

export default Project2;
