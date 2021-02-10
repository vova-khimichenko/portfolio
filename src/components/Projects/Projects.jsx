import React from 'react';
import styles from './Projects.module.scss'
import Project from "./Items/Project";
import {faCarSide} from "@fortawesome/free-solid-svg-icons";
import {faListOl} from "@fortawesome/free-solid-svg-icons";
import trackingBg from '../../assets/images/tracking.PNG';
import toDo from '../../assets/images/todo.PNG';

const projects = [
    {
        title: 'tracking',
        description: 'Tracking and reporting of vehicle movement.',
        icon: faCarSide,
        imagePath: trackingBg
    }, {
        title: 'to do',
        description: 'To do list using TypeScript.',
        icon: faListOl,
        imagePath: toDo
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
                                                     icon={project.icon}
                                                     imagePath={project.imagePath}/>)
                }
            </div>
        </div>
    );
}

export default Projects;
