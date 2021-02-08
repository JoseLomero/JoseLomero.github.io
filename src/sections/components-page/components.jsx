import React, { Component } from 'react';
import Card from '../../components/card/card';

import { Container, Row, Col } from 'react-bootstrap';
import './components.css';
class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <h1>Componentes</h1>
                <Row className="content-center">
                    <Col>
                        <Card
                            title={"Calendario"}
                            text={"Calendario hecho con Big Calendar y Sweet Alert 2"}
                            img={'/img/components-preview/calendario.jpg'}
                            internal={true}
                            link={"/calendario"}
                            git={"https://github.com/JoseLomero/React-Calendar-with-modals"}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Components;