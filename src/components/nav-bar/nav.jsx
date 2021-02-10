import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Card from '../../components/card/card';
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
                <Link to="/homepage"><Navbar.Brand>Jose Manuel Lomero</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Item><Link to="/" className="navigator-link">Inicio</Link></Nav.Item> */}
                        <Nav.Item><Link to="/components" className="navigator-link">Componentes</Link></Nav.Item>
                        <Nav.Item><Link to="/portafolio" className="navigator-link">Portafolio</Link></Nav.Item>
                        {/* <Nav.Item><Link to="/contact" className="navigator-link">Contacto</Link></Nav.Item> */}
                    </Nav>
                    <div className="contact-row">
                        <a href="mailto:joselomero0@gmail.com"><span>joselomero0@gmail.com</span></a>
                        <a href="https://www.linkedin.com/in/joselomero5/"><img src={process.env.PUBLIC_URL + "/img/icons/linkedin.png"} className="contact-icon" alt="mail" /></a>
                    </div>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

export default NavigationBar;