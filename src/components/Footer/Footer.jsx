import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <span className={styles.footerTitle}>Vovka Himik</span>
                <div className={styles.socialLinks}>
                    <div className={styles.item}>VK</div>
                    <div className={styles.item}>FB</div>
                    <div className={styles.item}>TG</div>
                    <div className={styles.item}>''</div>
                </div>
                <span className={styles.footerBottom}>© 2020 Все права запрещены</span>
            </div>
        </div>
    );
}

export default Footer;
