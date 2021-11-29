import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Projects></Projects>
            <Contact></Contact>
        </>
    );
};

export default Home;