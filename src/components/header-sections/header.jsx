import React, { Component } from 'react';

import './header.css';

class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const sectionStyle = {
            backgroundImage: "url(" + this.props.img + ")"
        };

        return (
            <div
                className="hero"
                style={sectionStyle}
                data-aos={this.props.aos}
                data-aos-easing={this.props.aosEasing}
                data-aos-duration={this.props.aosDuration}>

                <div className="hero-inner">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default HeaderSection;