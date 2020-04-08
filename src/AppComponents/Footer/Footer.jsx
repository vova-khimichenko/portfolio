import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                    <span>Vovka Himik
                    </span>
                <div className={styles.net}>
                    <div className={styles.item}>VK</div>
                    <div className={styles.item}>FB</div>
                    <div className={styles.item}>TG</div>
                    <div className={styles.item}>''</div>
                </div>
                <span>© 2020 Все права запрещены
                </span>
            </div>
        </div>
    );
}

export default Footer;
