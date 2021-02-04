import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Card as Tarjeta, Button } from 'react-bootstrap';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { classCard: 'hidden' };
    }

    componentDidMount() {
        window.onscroll = () => this.handleAnimation();
    };

    handleAnimation = () => {
        if (document.documentElement.scrollTop > 50) {
            this.setState({ classCard: 'visible' });
        };
    }

    render() {
        if (this.props.button) {
            const buttonHtml = ''
        }

        return (
            <Container>
                <div className="visible">
                    <Tarjeta style={{ width: '50vh'}}>
                        <Tarjeta.Title>{this.props.title}</Tarjeta.Title>
                        <Tarjeta.Body>
                            <img className="logo-card" alt="avatar" src={this.props.img} />
                            <Tarjeta.Text className="tarjeta-text-stylizer">{this.props.text}</Tarjeta.Text>
                            
                            <Button variant="secondary"><Link to="/calendario" className="link-styler">¡Puedes verlo aqui!</Link></Button>
                        </Tarjeta.Body>
                    </Tarjeta>
                </div>
            </Container>
        );
    }
}

export default Card;