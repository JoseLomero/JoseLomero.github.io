import React, { Component } from 'react';
import Presentation from '../../components/presentation/presentation';
import Card from '../../components/card/card';

import { Container, Row } from 'react-bootstrap';
import './mainPage.css';

import ImgAvatar from '../../img/marianne.png';
import ImgDuke from '../../img/dukemon.jpg';
import ImgBoth from '../../img/bothmon.png';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row className="content-center">
                    <Presentation
                        aos={"fade-right"}
                        aosEasing={"linear"}
                        aos-duration={"1500"}
                        img={ImgDuke}
                    />
                    <Card
                        data-aos="fade-up"
                        text={"Hello there!"}
                        img={ImgAvatar}
                    />
                    <Presentation
                        aos={"fade-right"}
                        aosEasing={"linear"}
                        aos-duration={"15000"}
                        img={ImgBoth}
                    />
                    <Presentation
                        aos={"fade-left"}
                        aosEasing={"linear"}
                        aos-duration={"15000"}
                        img={ImgBoth}
                    />
                </Row>
            </Container>
        );
    }
}

export default MainPage;