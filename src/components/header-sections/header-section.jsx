import React, { Component } from 'react';

import './header-section.css';

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
                className="hero-section"
                style={sectionStyle}>

                <div className="hero-section-inner">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default HeaderSection;