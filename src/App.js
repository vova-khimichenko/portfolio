import React from 'react';
import styles from './App.module.css';
import Header from "./AppComponents/Header/Header";
import Home from "./AppComponents/Home/Home";
import About from "./AppComponents/About/About";
import Skills from "./AppComponents/Skills/Skills";
import Projects from "./AppComponents/Projects/Projects";
import Contacts from "./AppComponents/Contacts/Contacts";
import Footer from "./AppComponents/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={styles.appContainer}>
                    <Header/>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/contacts' component={Contacts}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
