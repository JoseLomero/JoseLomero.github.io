import React, { Component } from 'react';
import Presentation from '../../components/presentation/presentation';
import Card from '../../components/card/card';

import { Container, Row, Col } from 'react-bootstrap';
import './components.css';

import calendario from '../../img/components-preview/calendario.jpg';

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row className="content-center">
                    <Col>
                        <Card
                            title={"Calendario"}
                            text={"Calendario hecho con Big Calendar y Sweet Alert 2"}
                            img={calendario}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Components;