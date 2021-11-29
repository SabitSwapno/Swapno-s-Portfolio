import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <>
            <div>
                <Navbar sticky="top" expand="lg" className="backgroud-nav">
                    <Container>
                        <Navbar.Brand href="/home" style={{
                            fontSize: "32px",
                            fontWeight: "700"
                        }}>Portfolio</Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link style={{
                                color: "black",
                                fontSize: "20px"
                            }} href="/home">Home</Nav.Link>
                            <Nav.Link style={{
                                color: "black",
                                fontSize: "20px"
                            }} href="#skills">Skills</Nav.Link>
                            <Nav.Link style={{
                                color: "black",
                                fontSize: "20px"
                            }} href="#projects">Projects</Nav.Link>
                            <Nav.Link style={{
                                color: "black",
                                fontSize: "20px"
                            }} href="#contact">Contact</Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default NavigationBar;