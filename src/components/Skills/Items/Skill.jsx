import React, {useEffect, useState} from 'react';
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags} from "@fortawesome/free-solid-svg-icons";

function Skill(props) {

    const [styleBg, changeStyleBg] = useState({width: '0'})
    useEffect(() => changeStyleBg({width: '100%'}), [])

    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{props.title} <FontAwesomeIcon className={styles.icon} icon={faTags}/></h4>
            <div className={styles.item}>
                <span className={styles.content}>{props.content}</span>
                <div className={styles.itemBg} style={styleBg}> </div>
            </div>
        </div>
    );
}

export default Skill;
