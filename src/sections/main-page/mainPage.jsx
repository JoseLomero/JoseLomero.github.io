import React, { Component } from 'react';
import Presentation from '../../components/presentation/presentation';
import Card from '../../components/card/card';

import { Container, Row } from 'react-bootstrap';
import './mainPage.css';
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
                        img={'/img/bothmon.png'}
                    />
                    <Card
                        data-aos="fade-up"
                        text={"Hello there!"}
                    />
                    <Presentation
                        aos={"fade-right"}
                        aosEasing={"linear"}
                        aos-duration={"15000"}
                        img={'/img/bothmon.png'}
                    />
                    <Presentation
                        aos={"fade-left"}
                        aosEasing={"linear"}
                        aos-duration={"15000"}
                        img={'/img/bothmon.png'}
                    />
                </Row>
            </Container>
        );
    }
}

export default MainPage;