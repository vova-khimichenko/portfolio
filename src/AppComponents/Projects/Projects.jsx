import React from 'react';
import styles from './Projects.module.css'
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import ProjectsItems from "./ProjectItems/ProjectsItems";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <ProjectsHeader/>
                <ProjectsItems/>
            </div>
        </div>
    );
}

export default Projects;
