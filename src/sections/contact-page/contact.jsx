import React, { Component } from 'react';
import Card from '../../components/card/card';

import { Container, Row, Col } from 'react-bootstrap';
import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <div>
                    <h1>Cómo contactar conmigo</h1>
                </div>
                <Row className="content-center">
                    <Col>
                        <p>Text</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;