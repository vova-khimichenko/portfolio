import React from 'react';
import styles from './ProjectsHeader.module.css'

function ProjectsHeader() {
    return (
        <div className={styles.blockHeader}>
            <span className={styles.nameHeader}>My Projects</span>
        </div>
    );
}

export default ProjectsHeader;
