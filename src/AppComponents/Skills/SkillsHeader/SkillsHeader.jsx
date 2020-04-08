import React from 'react';
import styles from './SkillsHeader.module.css'

function SkillsHeader() {
    return (
        <div className={styles.blockHeader}>
            <span className={styles.nameHeader}>My Skills</span>
        </div>
    );
}

export default SkillsHeader;
