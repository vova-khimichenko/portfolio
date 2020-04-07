import React from 'react';
import styles from './Projects.module.css'
import Skill1 from "../Skills/ScillItems/Items/Skill1";
import Skill2 from "../Skills/ScillItems/Items/Skill2";
import Skill3 from "../Skills/ScillItems/Items/Skill3";

function Projects () {
    return (
        <div className={styles.projects}>
                <div className={styles.container}>
                    <div className={styles.top}>My skills</div>
                    <div className={styles.bottom}>
                        {/*<Project1/>*/}
                        {/*<Project2/>*/}
                    </div>
                </div>
            </div>
    );
}

export default Projects;
