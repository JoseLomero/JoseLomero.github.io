import React, { Component } from 'react';

import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Jose's webpage</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Componentes" id="nav-dropdown">
                            <NavDropdown.Item href="/calendario">Calendario</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

export default NavigationBar;