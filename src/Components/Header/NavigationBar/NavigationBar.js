import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <>
            <div>
                <Navbar fixed="top" expand="lg" className="backgroud-nav">
                    <Container>
                        <Navbar.Brand href="/home" style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "white"
                        }}>Welcome</Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} style={{
                                color: "white",
                                fontSize: "20px"
                            }} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} style={{
                                color: "white",
                                fontSize: "20px"
                            }} to="/home#skills">Skills</Nav.Link>
                            <Nav.Link as={HashLink} style={{
                                color: "white",
                                fontSize: "20px"
                            }} to="/home#projects">Projects</Nav.Link>
                            <Nav.Link as={HashLink} style={{
                                color: "white",
                                fontSize: "20px"
                            }} to="/home#contact">Contact</Nav.Link>
                            <Nav.Link as={Link} style={{
                                color: "white",
                                fontSize: "20px"
                            }} to="/aboutMe">About Me</Nav.Link>
                            <Nav.Link as={Link} style={{
                                color: "white",
                                fontSize: "20px"
                            }} to="/blogs">Blogs</Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default NavigationBar;
