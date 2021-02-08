import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap and styles
import { Container, Card as Tarjeta, Button } from 'react-bootstrap';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Tarjeta>
                <Tarjeta.Header>{this.props.title}</Tarjeta.Header>
                <Tarjeta.Body>
                    <img className="logo-card" alt="avatar" src={process.env.PUBLIC_URL + this.props.img} />

                    <Tarjeta.Text className="tarjeta-text-stylizer">{this.props.text}</Tarjeta.Text>
                    {
                        this.props.internal ?
                            <Link to={this.props.link} className="link-styler"><Button variant="info">¡Comprueba cómo funciona!</Button></Link>
                            : <a href={"https://www." + this.props.link} target="_blank" rel="noreferrer" className="link-styler"><Button variant="info">¡Puedes verlo aqui!</Button></a>
                    }
                    {
                        this.props.git ?
                            <a href={this.props.git} target="_blank" rel="noreferrer" className="link-styler git-button">
                                <Button variant="info">Puedes verlo en Git!</Button>
                            </a>
                            : null
                    }
                </Tarjeta.Body>
            </Tarjeta>
        );
    }
}

export default Card;