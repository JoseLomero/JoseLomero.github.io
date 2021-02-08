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
                <Row className="content-center">
                    <Col>
                        <Card
                            title={"Calendario"}
                            text={"Calendario hecho con Big Calendar y Sweet Alert 2"}
                            img={'/img/components-preview/calendario.jpg'}
                            internal={true}
                            link={"/calendario"}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Components;