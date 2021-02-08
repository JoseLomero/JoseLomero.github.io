import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Card as Tarjeta, Button } from 'react-bootstrap';
import './img-gallery.css';

class ImgGallery extends Component {
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
        return (
            <Container>
                <div className="visible">
                    <Tarjeta>
                        <Tarjeta.Title>{this.props.title}</Tarjeta.Title>
                        <Tarjeta.Body>
                            <img className="logo-card" alt="avatar" src={process.env.PUBLIC_URL + this.props.img} />

                            <Tarjeta.Text className="tarjeta-text-stylizer">{this.props.text}</Tarjeta.Text>
                            {
                                this.props.internal ?
                                <Link to={this.props.link} className="link-styler"><Button variant="secondary">¡Puedes verlo aqui!</Button></Link>
                                : <a href={"https://www." + this.props.link} className="link-styler"><Button variant="secondary">¡Puedes verlo aqui!</Button></a>
                            }
                        </Tarjeta.Body>
                    </Tarjeta>
                </div>
            </Container>
        );
    }
}

export default ImgGallery;