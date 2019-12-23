import React from 'react';
import './App.css';
import Header from "./Tegs/Header";
import Main from "./Tegs/Main";
import Skills from "./Tegs/Skills";
import Projects from "./Tegs/Projects";
import Slogan from "./Tegs/Slogan";
import Contacts from "./Tegs/Contacts";
import Footer from "./Tegs/Footer";

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
