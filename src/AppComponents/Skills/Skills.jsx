import React from 'react';
import styles from './Skills.module.css'
import SkillsHeader from "./SkillsHeader/SkillsHeader";
import SkillItems from "./ScillItems/SkillItems";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <SkillsHeader/>
                <SkillItems/>
            </div>
        </div>
    );
}

export default Skills;
