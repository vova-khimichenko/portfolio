import React from 'react';
import styles from './Skill.module.scss'

function Skill(props) {
    return (
        <div className={styles.skillContainer}>
            <h6 className={styles.title}>{props.title}</h6>
            <div style={{background: `url("src/assets/images/bag.png")`}} className={styles.backgroundImage}>
                {/*<span className={styles.content}>{props.content}</span>*/}
            </div>
        </div>
    );
}

export default Skill;
