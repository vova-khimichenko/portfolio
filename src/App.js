import React from 'react';
import './App.css';
import Header from "./AppComponents/Header/Header";
import Main from "./AppComponents/Main/Main";
import Skills from "./AppComponents/Skills/Skills";
import Projects from "./AppComponents/Projects/Projects";
import Slogan from "./AppComponents/Slogan/Slogan";
import Contacts from "./AppComponents/Contacts/Contacts";
import Footer from "./AppComponents/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
