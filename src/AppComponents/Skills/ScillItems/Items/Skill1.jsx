import React from 'react';
import styles from './Skill.module.css'

function Skill1() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
            </div>
            <div className={styles.react}>React</div>
            <div className={styles.bottom}>
                <span>Подробное описание</span>
                <span>навыка</span>
            </div>
        </div>
    );
}

export default Skill1;