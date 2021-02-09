import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap y styles
import { Card, Button } from 'react-bootstrap';
import './presentation.css';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                className="presentation-card"
                data-aos={this.props.aos}
                data-aos-easing={this.props.aosEasing}
                data-aos-duration={this.props.aosDuration}
            >
                <Card
                    className="text-center"
                    style={{ width: '70vw' }}>
                    {this.props.title ?
                        <Card.Header>{this.props.title}</Card.Header>
                        : null
                    }
                    <div className="two-column">
                        <img className="drawing-presentation" alt="img" src={process.env.PUBLIC_URL + this.props.img} />
                        <Card.Body className="columna">
                            {this.props.text ?
                                <Card.Text>{this.props.text}</Card.Text>
                                : null
                            }
                        </Card.Body>
                        <Card.Body className="columna">
                            {this.props.subtext ?
                                <Card.Text>{this.props.subtext}</Card.Text>
                                : null
                            }
                            {
                                this.props.button ?
                                    <Link to={this.props.buttonLink} className="link-styler"><Button variant="info">{this.props.button}</Button></Link>
                                    : null
                            }
                        </Card.Body>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Presentation;