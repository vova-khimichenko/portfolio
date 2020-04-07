import React from 'react';
import styles from './SkillsHeader.module.css'

function SkillsHeader() {
    return (
        <div className={styles.skillsHeader}>
            <span className={styles.spanHeader}>My Skills</span>
        </div>
    );
}

export default SkillsHeader;
