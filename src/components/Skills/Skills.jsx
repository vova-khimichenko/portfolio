import React from 'react';
import styles from './Skills.module.scss'
import Skill from "./Items/Skill";

const skills = [
    {
        title: 'HTML/CSS',
        content: 'flexbox, css grid, css composes, css comb, media queries, sass'
    },
    {
        title: 'Javascript',
        content: 'arrow functions, array methods, spread, rest, closures, destructuring, promises, pure function,' +
            'this, deep copy objects, local storage'
    }, {
        title: 'REACT',
        content: 'class and function components, life cycle methods, HOCs, hooks, local state, ref, flux'
    }, {
        title: 'REDUX',
        content: 'store methods, reducer, combine-reducers, apply-middleware, redux-thunk'
    }, {
        title: 'TYPESCRIPT',
        content: 'typing JS objects and functions, react components, redux methods, etc.'
    },
]

function Skills() {
    return (
        <div className={styles.page}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>My skills</h2>
                <span className={styles.titleShadow}>My skills</span>
            </div>
            <div className={styles.items}>
                {
                    skills.map(skill => <Skill title={skill.title} content={skill.content}/>)
                }
            </div>
        </div>
    );
}

export default Skills;
