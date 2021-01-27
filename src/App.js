import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={styles.app}>
                    <Header/>
                    <Route path='/portfolio' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/contacts' component={Contacts}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
