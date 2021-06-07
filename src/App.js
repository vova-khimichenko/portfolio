import React, { useState} from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import {HashRouter, Route} from "react-router-dom";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {

    const [toggle, setToggle] = useState(true)
    const toggling = () => setToggle(!toggle)

    return (
        <HashRouter>
            <div className={styles.app}>
                <div className={styles.verticalLines}>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                </div>
                <div className={toggle ? styles.headerBlock : styles.headerBlockShow}>
                    <button className={styles.headerToggler} onClick={toggling}>
                        <FontAwesomeIcon icon={toggle ? faBars : faTimes} size="xs"/>
                    </button>
                    <Header toggling={toggling}/>
                </div>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/contacts' component={Contact}/>
            </div>
        </HashRouter>
    )
}

export default App;
