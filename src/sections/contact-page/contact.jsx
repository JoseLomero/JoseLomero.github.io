import React, { Component } from 'react';

// Components
import HeaderSection from '../../components/header-sections/header-section';

// Bootstrap and styles
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <HeaderSection
                    title={"Contacto"}
                    img={"/img/headers/contact.jpg"}
                />
                <Container>

                    <div>
                        <h1>Cómo contactar conmigo</h1>
                    </div>
                    <Row className="content-center">
                        <Col>
                            <p>Puedes contactar conmigo a través del mail joselomero0@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Contact;