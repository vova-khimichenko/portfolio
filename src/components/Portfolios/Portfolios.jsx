import React from 'react';
import styles from './Portfolios.module.scss'
import Project from "./Items/Project";

function Portfolios() {
    return (
        <div className={styles.page}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Portfolios</h2>
                <span className={styles.titleShadow}>Portfolios</span>
            </div>
            {/*<div className={styles.projects}>*/}
            {/*    <Project/>*/}
            {/*    <Project/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Portfolios;
