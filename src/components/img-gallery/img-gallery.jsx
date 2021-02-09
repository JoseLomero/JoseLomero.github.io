import React, { Component } from 'react';

// import Card from '../../components/card/card';
import { Container, Row, Col } from 'react-bootstrap';
import './img-gallery.css';

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getAllItems = (elements) => {
        let items = [];

        elements.forEach(element => {
            items.push(<Col>
                <div className="center-placer"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0">
                    <div>
                        <img src={element.url} alt={element.name} className="language-icon" />
                        <h5>{element.name}</h5>
                    </div>
                </div>
            </Col>);
        });
        return items;
    }

    render() {
        const items = this.getAllItems(this.props.language)

        return (
            <Container>
                <h2>{this.props.name}</h2>
                <Row>
                    {items}
                </Row>
            </Container>
        );
    }
}

export default ImgGallery;