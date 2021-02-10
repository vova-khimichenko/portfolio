import React from 'react';
import styles from './Project.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Project(props) {
    return (
        <div className={styles.container}>
            {/*<div className={styles.backgroundImage}>*/}
            {/*    <button className={styles.button}*/}
            {/*            type="button">Смотреть*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className={styles.item}> </div>
            <h4 className={styles.title}>{props.title} <FontAwesomeIcon className={styles.icon} icon={props.icon}/></h4>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;
