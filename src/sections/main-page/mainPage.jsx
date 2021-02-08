import React, { Component } from 'react';

// Components
import Header from '../../components/header/header';
import Presentation from '../../components/presentation/presentation';
import ImgGallery from '../../components/img-gallery/img-gallery';

// Other Imports
import languages from '../../backend/languages';

// Bootstrap and styles
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
                <Header
                    title={"Conóceme mejor"}
                    img={"/img/headers/employee.jpg"}
                    avatar={"/img/portrait.png"}

                    aos={"fade-right"}
                    aosEasing={"linear"}
                    aos-duration={"1500"}
                />
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
            </>
        );
    }
}

export default MainPage;