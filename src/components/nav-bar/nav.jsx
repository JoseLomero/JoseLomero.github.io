import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import './nav.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link to="/"><Navbar.Brand>Jose's Webpage</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item><Link to="/" className="navigator-link">Home</Link></Nav.Item>
                        <Nav.Item><Link to="/components" className="navigator-link">Componentes</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

export default NavigationBar;