import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Card from '../card/card';
import Presentation from '../presentation/presentation';
import ImgAvatar from '../../img/marianne.png';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Presentation />
                <Card text={"Hello there!"} img={ImgAvatar} />
                <Presentation />
            </Container>
        );
    }
}

export default MainPage;