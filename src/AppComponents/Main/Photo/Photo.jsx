import React from 'react'
import styles from './Photo.module.css'

function Photo() {
    return (
        <div className={styles.photo}>
            <img src="./myPhoto.JPG"
                 alt="не смог добавить фото :("/>
        </div>
    );
}

export default Photo;
