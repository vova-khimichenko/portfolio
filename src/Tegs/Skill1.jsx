import React from 'react';
import styles from '../Styles/Skill1.module.css'

function Skill1() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.item}>ц</div> {/*не центрируется*/}
                <div>React</div>
            </div>
            <div className={styles.bottom}>
            </div>
        </div>
    );
}

export default Skill1;
