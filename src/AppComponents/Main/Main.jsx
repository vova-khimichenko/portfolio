import React from 'react'
import styles from './Main.module.css'
import Greeting from "./Greeting/Greeting";
import Photo from "./Photo/Photo";

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Greeting/>
                <Photo/>
            </div>
        </div>
    );
}

export default Main;
