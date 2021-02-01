import React, { Component } from 'react';
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
        return (
            // <div className={this.state.classCard}>
            <div>
                <p>{this.props.text}</p>
                <p>{this.props.img}</p>
                {/* <img src={imageUrl} /> */}
                {/* <div><p>{text}</p></div> */}
            </div>
        );
    }
}

export default Card;