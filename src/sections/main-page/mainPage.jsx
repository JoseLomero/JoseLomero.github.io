import React, { Component } from 'react';
// import Header from '../../components/header/header';
import Presentation from '../../components/presentation/presentation';
import ImgGallery from '../../components/img-gallery/img-gallery';
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
            <Container>
                <section className="hero">
                    {/* <Header url={"/img/headers/officer.jpg"} /> */}
                    <div className="hero-inner">
                        <h1>Conoce mejor a</h1>
                        <h1>Jose Manuel</h1>
                    </div>
                </section>
                <Row className="content-center">
                    <Presentation
                        aos={"fade-right"}
                        aosEasing={"linear"}
                        aos-duration={"1500"}
                        img={'/img/bothmon.png'}
                    />
                    <div className="languages-section">
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
                </Row>
            </Container>
        );
    }
}

export default MainPage;