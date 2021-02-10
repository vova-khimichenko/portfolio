import React from 'react';
import styles from './Projects.module.scss'
import Project from "./Items/Project";
import {faCarSide} from "@fortawesome/free-solid-svg-icons";

const projects = [
    {
        title: 'tracking-fe',
        description: 'tracking and reporting of vehicle movement',
        icon: faCarSide,
    }, {
        title: 'title',
        description: 'description'
    }, {
        title: 'title',
        description: 'description'
    }, {
        title: 'title',
        description: 'description'
    },
]

function Projects() {
    return (
        <div className={styles.page}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>My Projects</h2>
                <span className={styles.titleShadow}>My Projects</span>
            </div>
            <div className={styles.items}>
                {
                    projects.map(project => <Project title={project.title}
                                                     description={project.description}
                                                     icon={project.icon}/>)
                }
            </div>
        </div>
    );
}

export default Projects;
