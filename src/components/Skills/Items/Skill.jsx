import React from 'react';
import styles from './Skill.module.scss'

function Skill(props) {
    return (
        <div className={styles.skillContainer}>
            <h6 className={styles.title}>{props.title}</h6>
            <div className={styles.backgroundImage}>
                <div className={styles.content}>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Skill;
