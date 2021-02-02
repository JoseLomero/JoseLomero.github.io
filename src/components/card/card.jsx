import React, { Component } from 'react';
import { Container, Card as Tarjeta } from 'react-bootstrap';
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
        // <div className={this.state.classCard}>
        return (
            <Container>
                <div className="visible">
                    <Tarjeta style={{ width: '50vh'}}>
                        <Tarjeta.Body>
                            <img className="logo-card" alt="avatar" src={this.props.img} />
                            <Tarjeta.Text className="tarjeta-text-stylizer">{this.props.text}</Tarjeta.Text>
                        </Tarjeta.Body>
                    </Tarjeta>
                </div>
            </Container>
        );
    }
}

export default Card;