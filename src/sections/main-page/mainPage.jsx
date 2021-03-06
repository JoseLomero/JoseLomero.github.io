import React, { Component } from 'react';

// Components
import Header from '../../components/header/header';
import Presentation from '../../components/presentation/presentation';
import ImgGallery from '../../components/img-gallery/img-gallery';

// Other Imports
import languages from '../../backend/languages';

// Bootstrap and styles
import { Row, Card as CardBootstrap, Button } from 'react-bootstrap';
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
                    title={"Bienvenido"}
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
                        title={"Sobre mí"}
                        img={'/img/misc/drawing.jpeg'}
                        text={"¡Buenas! Soy Jose Manuel, Desarrollador de Aplicaciones Web entregado a su trabajo y siempre con ganas de aprender. Tengo una gran habilidad para expresarme gracias a mi formación como actor y locutor, y soy capaz de analizar y sintetizar problemas para ayudar a los demás a entenderlos. Me dedico a hacer las páginas web accesibles y sencillas de entender para los demás."}
                        subtext={"Me gustaría continuar mi trabajo como FrontEnd developer, pero he trabajado ya como Fullstack Developer y BackEnd Developer, ¡así que puedes estar seguro que aceptaré el reto que me lances y lograré realizarlo!"}
                    />
                    <Presentation
                        aos={"fade-left"}
                        aosEasing={"linear"}
                        aos-duration={"1500"}
                        img={'/img/sections/componentes.png'}
                        title={"Algunos trabajos propios son..."}
                        text={"Una lista bastante escueta, ¡lo sé! Pero irá creciendo, de eso estoy totalmente seguro."}
                        button={"Ir a Componentes"}
                        buttonLink={"/components"}
                    />
                    <Presentation
                        aos={"fade-right"}
                        aosEasing={"linear"}
                        aos-duration={"1500"}
                        img={'/img/sections/portafolio.png'}
                        title={"Algunas de las webs en las que he trabajado"}
                        text={"Trabajos hechos tanto en la consultora EMO Sistemas como en Pasaporte Escape Room. He hecho desde webs para centros médicos hasta tiendas online. ¡Y no nos olvidemos que trabajé en la creación de una intranet!"}
                        button={"Échale un vistazo"}
                        buttonLink={"/portafolio"}
                    />
                    <div className="languages-section">
                        <div className="title-text">
                            <h2 className="bullet-text">Pero, ¿qué es lo que conozco?</h2>
                        </div>
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
                        <div
                            className="contact"
                            data-aos={"fade-left"}
                            data-aos-easing={"linear"}
                            data-aos-duration={"700"}>
                            <CardBootstrap border="light">
                                <CardBootstrap.Title>¿Y cómo puedo contactar contigo?</CardBootstrap.Title>
                                <CardBootstrap.Body>
                                    <CardBootstrap.Text>Puedes ponerte en contacto conmigo a través de mi correo electronico o mi perfil de Linkedin.</CardBootstrap.Text>
                                    <div className="column-layer">
                                        <div className="column-element">
                                            <img src={process.env.PUBLIC_URL + "/img/icons/mail.png"} className="contact-icon" alt="mail" />
                                            <a href="mailto:joselomero0@gmail.com"><h5>joselomero0@gmail.com</h5></a>
                                        </div>
                                        {/* <div className="column-element">
                                            <img src="/img/icons/github.png" className="contact-icon" alt="mail" />
                                            <a href="https://github.com/JoseLomero"><Button variant="info">Visita mi repo en Github</Button></a>
                                        </div> */}
                                        <div className="column-element">
                                            <img src={process.env.PUBLIC_URL + "/img/icons/linkedin.png"} className="contact-icon" alt="mail" />
                                            <a href="https://www.linkedin.com/in/joselomero5/"><Button variant="info">Visita mi perfil en Linkedin</Button></a>
                                        </div>
                                    </div>
                                </CardBootstrap.Body>
                            </CardBootstrap>
                        </div>
                    </div>
                </Row>
            </>
        );
    }
}

export default MainPage;