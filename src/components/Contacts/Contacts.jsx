import React from 'react';
import styles from './Contacts.module.scss'

function Contacts() {
    return (
        <div className={styles.page}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Contact me</h2>
                <span className={styles.titleShadow}>Contact me</span>
            </div>
            {/*<form className={styles.tegForm}>*/}
            {/*    <input className={styles.tegInput}/>*/}
            {/*    <input className={styles.tegInput}/>*/}
            {/*    <textarea className={styles.tegTextarea}/>*/}
            {/*</form>*/}
            {/*<button className={styles.button}*/}
            {/*        type="submit">Отправить*/}
            {/*</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default Contacts;
