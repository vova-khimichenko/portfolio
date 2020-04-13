import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                    <span className={styles.top}>
                        Контакты
                    </span>
                <form className={styles.tegForm}>
                    <input className={styles.tegInput}/>
                    <input className={styles.tegInput}/>
                    <textarea className={styles.tegTextarea}/>
                </form>
                <button className={styles.button}
                        type="submit">Отправить
                </button>
            </div>
        </div>
    );
}

export default Contacts;
