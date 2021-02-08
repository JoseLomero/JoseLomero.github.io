import React, { Component } from 'react';
import Presentation from '../../components/presentation/presentation';
import ImgGallery from '../../components/img-gallery/img-gallery';
import Card from '../../components/card/card';
import languages from '../../backend/languages';


import { Container, Row, Card as CardBootstrap } from 'react-bootstrap';
import './mainPage.css';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="content-center">
                        <Presentation
                            aos={"fade-right"}
                            aosEasing={"linear"}
                            aos-duration={"1500"}
                            img={'/img/bothmon.png'}
                        />
                        <Card
                            data-aos="fade-up"
                            text={"Hello there!"}
                        />
                        <div>
                            <CardBootstrap bg="light" className="card-spacer">
                                <ImgGallery language={languages.basics} name={"Conocimientos Básicos"} />
                            </CardBootstrap>
                            <CardBootstrap bg="light" className="card-spacer">
                                <ImgGallery language={languages.frontend} name={"FrontEnd"} />
                            </CardBootstrap>
                            <CardBootstrap bg="light" className="card-spacer">
                                <ImgGallery language={languages.backend} name={"BackEnd"} />
                            </CardBootstrap>
                            <CardBootstrap bg="light" className="card-spacer">
                                <ImgGallery language={languages.databases} name={"Bases de Datos"} />
                            </CardBootstrap>
                            <CardBootstrap bg="light" className="card-spacer">
                                <ImgGallery language={languages.other} name={"Otros Conocimientos"} />
                            </CardBootstrap>
                        </div>
                        {/* <Presentation
                        aos={"fade-left"}
                        aosEasing={"linear"}
                        aos-duration={"15000"}
                        img={'/img/bothmon.png'}
                    /> */}
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainPage;