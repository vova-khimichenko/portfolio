import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Items/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <h3 className={styles.skillsTitle}>
                    My skills
                </h3>
                <div className={styles.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
