import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './presentation.css';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                data-aos={this.props.aos}
                data-aos-easing={this.props.aosEasing}
                data-aos-duration={this.props.aosDuration}
            >
                <Card
                    border="light"
                    className="text-center"
                    style={{ width: '70vw' }}>
                    <Card.Img variant="top" alt="img" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>Jose</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem et tempore saepe hic cum dolore iure aut! Reiciendis harum laudantium enim, vitae neque molestias nostrum similique perferendis nisi dolorum in.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Presentation;