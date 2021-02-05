import React from 'react';
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTag, faTags} from "@fortawesome/free-solid-svg-icons";

function Skill(props) {
    return (
        <div className={styles.skillContainer}>
            <h6 className={styles.title}>{props.title} <FontAwesomeIcon icon={faTags}/></h6>
            <div className={styles.backgroundImage}>
                <div className={styles.content}>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Skill;
