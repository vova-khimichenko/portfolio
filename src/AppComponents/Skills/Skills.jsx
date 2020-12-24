import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Items/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <h2 className={styles.titleSkills}>My skills</h2>
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
