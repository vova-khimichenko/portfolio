import React from 'react';
import styles from './Projects.module.css'
import Project from "./Items/Project";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <h3 className={styles.projectsTitle}>
                    My Projects
                </h3>
                <div className={styles.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
