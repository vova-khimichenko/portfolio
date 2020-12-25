import React from 'react';
import styles from './Skill.module.css'

function Skill() {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.iconSkill}></div>
            <h3>React</h3>
            <span>в консоли переходим в папку, в которой будет проект (d: - перейти на диск, cd путь к папке - перейти
                в папку, cd .. - выйти из папки (подняться на уровень выше))Копируем команду npx create-react-app my-app
                и вместо my-app  пишем название нашего проекта
            </span>
        </div>
    );
}

export default Skill;
