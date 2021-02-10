import React, { Component } from 'react';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <h2>Oops. Quizá no deberías estar aqui</h2>
                    <p>Parece que has llegado a un sitio que no existe. ¿Volvemos atrás y hacemos ver que no ha pasado nada?</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotFound;