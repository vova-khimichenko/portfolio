import React from 'react';
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags} from "@fortawesome/free-solid-svg-icons";

function Skill(props) {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{props.title} <FontAwesomeIcon className={styles.icon} icon={faTags}/></h4>
            <div className={styles.item}>
                <span className={styles.content}>{props.content}</span>
            </div>
        </div>
    );
}

export default Skill;
