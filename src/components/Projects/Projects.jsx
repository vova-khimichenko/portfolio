import React from 'react';
import styles from './Projects.module.scss'
import Project from "./Items/Project";
    import {faCarSide, faGamepad, faListOl, faStopwatch20, faTabletAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import trackingBg from '../../assets/images/tracking.PNG';
import toDo from '../../assets/images/todo.PNG';
import counter from '../../assets/images/counter.PNG';
import duck from '../../assets/images/duck.png';
import github from '../../assets/images/github.PNG';
import apps from '../../assets/images/apps.PNG'
// import trackingAppScreenshot from '../../assets/images/trackingAppScreenshot.jpg'

const projects = [
    {
        title: 'tracking',
        description: 'Tracking and reporting of vehicle movement.',
        icon: faCarSide,
        imagePath: trackingBg,
        projectPath: 'http://trex.by:81'
        // projectPath: trackingAppScreenshot
    }, {
        title: 'to do',
        description: 'To do list using TypeScript, Storybook, TDD, API.',
        icon: faListOl,
        imagePath: toDo,
        projectPath: 'https://vovkahimik.github.io/todolist-offline/'
    }, {
        title: 'counter',
        description: 'Double counter using React/Redux.',
        icon: faStopwatch20,
        imagePath: counter,
        projectPath: 'https://vovkahimik.github.io/counter/'
    }, {
        title: 'duck',
        description: 'Game catch the duck.',
        icon: faGamepad,
        imagePath: duck,
        projectPath: 'https://vovkahimik.github.io/duck/'
    }, {
        title: 'github',
        description: 'Search user GitHub repositories.',
            icon: faGithub,
        imagePath: github,
        projectPath: 'https://vovkahimik.github.io/request_GitHub_repositories/'
    }, {
        title: 'next project',
        description: 'Your site could be here.  ',
        icon: faTabletAlt,
        imagePath: apps,
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
                                                     imagePath={project.imagePath}
                                                     projectPath={project.projectPath}/>)
                }
            </div>
        </div>
    );
}

export default Projects;
