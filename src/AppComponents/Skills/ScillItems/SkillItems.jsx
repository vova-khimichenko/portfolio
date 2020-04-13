import React from 'react';
import styles from './SkillItems.module.css'
import Skill1 from "./Items/Skill1";
import Skill2 from "./Items/Skill2";
import Skill3 from "./Items/Skill3";

function SkillItems() {
    return (
        <div className={styles.container}>
            <Skill1/>
            <Skill2/>
            {/*<Skill3/> */}
            {/*переносит контент и располагает поверх другого*/}
        </div>
    );
}

export default SkillItems;
