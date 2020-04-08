import React from 'react';
import styles from './Skill.module.css'

function Skill2() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
            </div>
            <div className={styles.middle}>React</div>
            <div className={styles.bottom}>
                <span>Подробное описание</span>
                <span>навыка</span>
            </div>
        </div>
    );
}

export default Skill2;
