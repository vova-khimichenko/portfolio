import React from 'react';
import styles from './ProjectsItems.module.css'
import Project2 from "./Items/Project2";
import Project1 from "./Items/Project1";

function ProjectsItems() {
    return (
        <div className={styles.container}>
            <Project1/>
            <Project2/>
        </div>
    );
}

export default ProjectsItems;
