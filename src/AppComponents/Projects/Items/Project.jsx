import React from 'react';
import styles from './Project.module.css'

function Project() {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.backgroundImage}>
                <button className={styles.button}
                        type="button">Смотреть
                </button>
            </div>
            <div className={styles.project}>
                    <h4 className={styles.projectTitle}>
                        Название проекта
                    </h4>
                    <span className={styles.projectDescription}>
                        Краткое описание проекта
                        Краткое описание проекта
                    </span>
            </div>
        </div>
    );
}

export default Project;
