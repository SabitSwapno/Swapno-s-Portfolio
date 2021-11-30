import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </>
    );
};

export default Home;