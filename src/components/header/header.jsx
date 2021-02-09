import React, { Component } from 'react';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const sectionStyle = {
            backgroundImage: "url(" + process.env.PUBLIC_URL + this.props.img + ")"
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
                    {this.props.avatar ?
                        <div className="portarit-icon">
                            <img src={process.env.PUBLIC_URL + this.props.avatar} alt="portrait" />
                        </div>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Header;