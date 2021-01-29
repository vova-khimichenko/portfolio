import React from 'react';
import styles from './Skills.module.scss'
import Skill from "./Items/Skill";

const skills = [
    {
        title: 'HTML5/CSS3',
        content: 'flexbox, css grid, media queries'
    },
    {
        title: 'Javascript',
        content: 'es5 / es6, arrow functions, array methods, spread, rest, closures, destructuring, promises, pure ' +
            'function,this, prototypes, deep copy objects, local storage'
    },  {
        title: 'REACT',
        content: 'class and function components, life cycle methods, HOCs, hooks, local state, AJAX, ref, Flux'
    },  {
        title: 'REDUX',
        content: 'store methods, reducer, combineReducers, applyMiddleware, redux-thunk'
    },  {
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
            <div className={styles.skills}>
                {
                    skills.map(skill => <Skill title={skill.title} content={skill.content}/>)
                }
            </div>
        </div>
    );
}

export default Skills;
