import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Portfolios/Portfolios";
import Contact from "./components/Contact/Contact";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <div className={styles.verticalLines}>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                    <span className={styles.line}> </span>
                </div>
                {/*<div className={styles.pageWrapper}>*/}
                <Route path='/portfolio' component={Home}/>
                <Route path='/home' component={Home}/>
                {/*    <Route path='/skills' component={Skills}/>*/}
                {/*    <Route path='/projects' component={Projects}/>*/}
                {/*    <Route path='/contacts' component={Contact}/>*/}
                {/*</div>*/}
                <Header/>
            </div>
        </BrowserRouter>
    );
}

export default App;
