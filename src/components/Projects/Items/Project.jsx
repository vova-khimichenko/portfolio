import React, {useEffect, useState} from 'react';
import styles from './Project.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Project(props) {

    const [styleBg, changeStyleBg] = useState('0')

    useEffect(() => changeStyleBg('100%'), [])

    const routeToContact = () => {
        window.location.assign('http://localhost:3000/portfolio#/contacts')
    }

    return (
        <div className={styles.container}>
            <a className={styles.item} target="_blank" without rel="noopener noreferrer" href={props.projectPath}
               onClick={props.title === 'next project' && routeToContact}>
                <div className={styles.itemBg}
                     style={{backgroundImage: `url(${props.imagePath})`, width: styleBg}}>{}</div>
            </a>
            <h4 className={styles.title}>{props.title} <FontAwesomeIcon className={styles.icon} icon={props.icon}/></h4>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}

export default Project;
