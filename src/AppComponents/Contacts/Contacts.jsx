import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <span>Контакты
                    </span>
                </div>
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
