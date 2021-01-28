import React from 'react';
import styles from './Skills.module.scss'
import Skill from "./Items/Skill";

function Skills() {
    return (
        <div className={styles.page}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>My skills </h2>
                <span className={styles.titleShadow}>My skills</span>
            </div>

            {/*<div className={styles.skills}>*/}
            {/*    <Skill/>*/}
            {/*    <Skill/>*/}
            {/*    <Skill/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Skills;
