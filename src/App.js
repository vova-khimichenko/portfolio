import React from 'react';
import styles from './App.module.css';
import Header from "./AppComponents/Header/Header";
import Home from "./AppComponents/Home/Home";
import Skills from "./AppComponents/Skills/Skills";
import Projects from "./AppComponents/Projects/Projects";
import Slogan from "./AppComponents/Slogan/Slogan";
import Contacts from "./AppComponents/Contacts/Contacts";
import Footer from "./AppComponents/Footer/Footer";

function App() {
    return (
        <div className="App">
            <div className={styles.appContainer}>
                <Header/>
                <Home/>
                {/*<Skills/>*/}
                {/*<Projects/>*/}
                {/*<Slogan/>*/}
                {/*<Contacts/>*/}
                {/*<Footer/>*/}
            </div>
        </div>
    );
}

export default App;
