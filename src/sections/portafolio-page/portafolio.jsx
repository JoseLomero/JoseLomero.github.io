import React, { Component } from 'react';
import Card from '../../components/card/card';

import { Container, Row, Col } from 'react-bootstrap';
import './portafolio.css';

class Portafolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <div>
                    <h1>Diferentes webs en las que he trabajado:</h1>
                </div>
                <Row className="content-center">
                    <Col>
                        <Card
                            title={"Pasaporte Escape Room"}
                            text={"Desarrollo del backend de la app, creación de endpoints de la api y generación del swagger."}
                            img={'/img/portafolio-preview/pasaporte.png'}
                            internal={false}
                            link={"pasaporteescaperoom.com/"}
                        />
                    </Col>
                    <Col>
                        <Card
                            title={"Macfrin Premium"}
                            text={"Desarrollo de la versión de Junio de 2020"}
                            img={'/img/portafolio-preview/grupomacfrin.png'}
                            internal={false}
                            link={"macfrinpremium.com/"}
                        />
                    </Col>
                    <Col>
                        <Card
                            title={"CMD Parets"}
                            text={"Desarrollo de la versión de Marzo de 2020"}
                            img={'/img/portafolio-preview/cmdparets.png'}
                            internal={false}
                            link={"cmdparets.com/"}
                        />
                    </Col>
                </Row>
                <Row className="content-center">
                    <Col>
                        <Card
                            title={"Tecelmac"}
                            text={"Desarrollo de la versión de Noviembre de 2019"}
                            img={'/img/portafolio-preview/tecelmac.png'}
                            internal={false}
                            link={"tecelmac.com/"}
                        />
                    </Col>
                    <Col>
                        <Card
                            title={"Berlinger Haus"}
                            text={"Desarrollo de la tienda en la versión de Marzo de 2020"}
                            img={'/img/portafolio-preview/berlingerhaus.png'}
                            internal={false}
                            link={"berlingerhaus.com/"}
                        />
                    </Col>
                    <Col>
                        <Card
                            title={"Almenibor"}
                            text={"Desarrollo de la versión de Septiembre de 2019"}
                            img={'/img/portafolio-preview/almenibor.png'}
                            internal={false}
                            link={"almenibor.com/"}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Portafolio;