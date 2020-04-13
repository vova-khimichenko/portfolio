import React from 'react';
import styles from './Projects.module.css'
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import ProjectItems from "./ProjectItems/ProjectItems";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <ProjectsHeader/>
                <ProjectItems/>
            </div>
        </div>
    );
}

export default Projects;
