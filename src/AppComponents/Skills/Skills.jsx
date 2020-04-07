import React from 'react';
import styles from './Skills.module.css'
import Skill1 from "./Skill1";
import Skill2 from "./Skill2";
import Skill3 from "./Skill3";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.top}>My skills</div>
                <div className={styles.bottom}>
                    <Skill1/>
                    <Skill2/>
                    <Skill3/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
