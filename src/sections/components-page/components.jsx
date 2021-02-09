import React, { Component } from 'react';
import Card from '../../components/card/card';

// Components
import HeaderSection from '../../components/header-sections/header-section';

// Bootstrap and styles
import { Container, Row, Col } from 'react-bootstrap';
import './components.css';
class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <HeaderSection
                    title={"Componentes"}
                    img={"/img/headers/coding.jpg"}
                />
                <Container>
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
            </>
        );
    }
}

export default Components;